import React, { useState } from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import { BiArrowBack as BackIcon } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

import Note from '../../components/Note'
import NewNote from '../../components/NewNote'

import './styles.css'

import ViewNoteModal from '../../components/ViewNoteModal';
import AddNoteModal from '../../components/AddNoteModal';

// dados temporários
const notes = [
  {
    id: 1,
    title: 'RFID',
    content: 'Parada de restreamento'
  },
  {
    id: 2,
    title: 'IFAM',
    content: 'Local de dor e sofrimento para a futura redenção :)'
  },
  {
    id: 3,
    title: 'Canção do exílio',
    content: `
    Minha terra tem palmeiras,
    Onde canta o Sabiá;
    As aves, que aqui gorjeiam,
    Não gorjeiam como lá.
    
    Nosso céu tem mais estrelas,
    Nossas várzeas têm mais flores,
    Nossos bosques têm mais vida,
    Nossa vida mais amores.
    
    Em cismar, sozinho, à noite,
    Mais prazer eu encontro lá;
    Minha terra tem palmeiras,
    Onde canta o Sabiá.
    
    Minha terra tem primores,
    Que tais não encontro eu cá;
    Em cismar –sozinho, à noite–
    Mais prazer eu encontro lá;
    Minha terra tem palmeiras,
    Onde canta o Sabiá.
    
    Não permita Deus que eu morra,
    Sem que eu volte para lá;
    Sem que desfrute os primores
    Que não encontro por cá;
    Sem qu'inda aviste as palmeiras,
    Onde canta o Sabiá`
  }
]

const ListNotes = () => {
  const history = useHistory()
  const [ showViewNoteModal, setShowViewNoteModal ] = useState(false)
  const [ showAddNoteModal, setShowAddNoteModal ] = useState(false)

  const [ noteForViewModal, setNoteForModal ] = useState({})

  function handleBack(){
    // voltar para a página inicial 
    history.push('/')
   }

  function handleAddNote(){
    // mostrar modal de adicionar nota.
    handleAddNoteExpanded()
  }
  
  function handleAddNoteExpanded(){
    // mostrar modal de adicionar nota.
    setShowAddNoteModal(true)
  }

  function handleShowNote(event, note){
    // mostrar descrição de uma nota
    const { className } = event.target
    if(["note", "title", "content"].includes(className)){
      setNoteForModal(note)
      setShowViewNoteModal(true)
    }
  }

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
                notes.map(note => {
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