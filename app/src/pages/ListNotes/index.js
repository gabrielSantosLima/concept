import React from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import { BiArrowBack as BackIcon } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Note from '../../components/Note'
import NewNote from '../../components/NewNote'

import 'react-toastify/dist/ReactToastify.css'
import './styles.css'

const ListNotes = () => {
  const history = useHistory()

  function handleBack(){
    // voltar para a página inicial 
    history.push('/')
   }

  function handleAddNote(){
    // adicionar nova nota
  }
  
  function handleAddNoteExpanded(){
    // adicionar nova nota em um modal
  }

  function handleShowNote(){
    // mostrar uma nota
  }

  return(
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
            <Note title="title" content="Conteúdo" onClick={handleShowNote}/>
            <NewNote onClick={handleAddNote} />
          </div>
        </div>

        <ToastContainer  />
      </div>
  );
}

export default ListNotes;