import React, { useEffect, useState } from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import { BiArrowBack as BackIcon } from 'react-icons/bi'
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom'

import Note from '../../components/Note'
import NewNote from '../../components/NewNote'

import './styles.css'

import ViewNoteModal from '../../components/ViewNoteModal';
import AddNoteModal from '../../components/AddNoteModal';

async function fetchNotes(){
  return await fetch('http://localhost:3333/notes').then(response => response.json())
}

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

  function handleAddNote(){
    handleAddNoteExpanded()
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

  async function getNotes(){
    try {
      setLoadingNotes(true)
      const data = await fetchNotes()
      setNotes(data)
    } catch(err) {
      setErrorNotes(err)
    } finally {
      setLoadingNotes(false)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])


  useEffect(() => {
    if(errorNotes) {
      addToast('Erro ao carregar suas notas!', { appearance: 'error', autoDismiss: true })
    } else if(!loadingNotes) {
      addToast('Notas carregadas!', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 })
    }
  }, [errorNotes, loadingNotes])

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
                  />
                })
              }
              <NewNote onClick={handleAddNote} />
            </div>
          </div>
        </div>
        {
          showViewNoteModal ? 
          <ViewNoteModal note={noteForViewModal} onClose={ () => { setShowViewNoteModal(false) }} /> : null
        }
        
        {
          showAddNoteModal ? 
          <AddNoteModal onClose={ () => { setShowAddNoteModal(false) }} /> : null
        }
      </>
  );
}

export default ListNotes;