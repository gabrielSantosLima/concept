import React, { useEffect, useState } from 'react'
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import { BiArrowBack as BackIcon } from 'react-icons/bi'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom'

import Note from '../../components/Note'
import NewNote from '../../components/NewNote'

import './styles.css'

import ViewNoteModal from '../../components/ViewNoteModal'
import AddNoteModal from '../../components/AddNoteModal'

import { createNote, fetchNotes, updateNote } from '../../api'

const ListNotes = () => {
  const history = useHistory()
  const { addToast } = useToasts()

  const [ showViewNoteModal, setShowViewNoteModal ] = useState(false)
  const [ showAddNoteModal, setShowAddNoteModal ] = useState(false)

  const [ noteForViewModal, setNoteForModal ] = useState({})
  
  const [ notes, setNotes] = useState(null)
  const [ errorNotes, setErrorNotes] = useState(null)
  const [ loadingNotes, setLoadingNotes] = useState(true)

  function handleBack(){
    history.push('/')
  }

  async function handleAddNote(){
    await createNote('Nota','clique para editar!').then(note => {
      addNote(note)
    })
  }

  function handleAddNoteExpanded(){
    setShowAddNoteModal(true)
  }

  function handleShowNote(event, note){
    const { className } = event.target
    if(["note", "title", "content"].includes(className)){
      setNoteForModal(note)
      setShowViewNoteModal(true)
    }
  }

  function handleDelete(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

  function addNote(note) {
    const pushedNote = notes.concat(note)
    setNotes(pushedNote)
  }
  
  function updateNote() {
    setNotes(notes.map(note => note.id === noteForViewModal.id ? noteForViewModal : note))
  }

  useEffect(() => {
    (async () => {
      try {
        setLoadingNotes(true)
        await fetchNotes().then(notes => {
          setNotes(notes)
        })
      } catch(err) {
        setErrorNotes(err)
      } finally {
        setLoadingNotes(false)
      }
    })()
  }, [])

  useEffect(() => {
    if(errorNotes) {
      addToast('Erro ao carregar suas notas!', { appearance: 'error', autoDismiss: true })
    } else if(!loadingNotes) {
      addToast('Notas carregadas!', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 })
    }
  }, [errorNotes, loadingNotes, addToast])

  return(
      <>
        <div className="content">
          <div className="left">
            <nav>
              <button className="back-button" onClick={handleBack}>
                <BackIcon size={24} />
              </button>
              <button className="add-note-button" onClick={handleAddNoteExpanded}>
                <PlusIcon size={24} />
              </button>
            </nav>
          </div>
          
          <div className="right">
            <header>
              <h1>Concept</h1>
              <h2>Organize suas ideias em um só lugar.</h2>
            </header>
            
            <div className="notes">
              {
                errorNotes || loadingNotes ? null 
                : notes.map(note => {
                  return <Note 
                    key={note.id} 
                    note={note}
                    onClick={event => handleShowNote(event, note)}
                    onDelete={() => handleDelete(note.id)}
                  />
                })
              }
              <NewNote onClick={handleAddNote} />
            </div>
          </div>
        </div>
        {
          showViewNoteModal ? 
          <ViewNoteModal 
            note={noteForViewModal}
            onDelete={() => handleDelete(noteForViewModal.id)}
            onClose={() => { setShowViewNoteModal(false); updateNote()}} /> : null
        }
        
        {
          showAddNoteModal ? 
          <AddNoteModal 
            onSave={note => (addNote(note))}
            onClose={() => { setShowAddNoteModal(false) }} /> : null
        }
      </>
  );
}

export default ListNotes;