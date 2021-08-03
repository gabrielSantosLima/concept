import React from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { useToasts } from 'react-toast-notifications';

import './styles.css'

const Note = ({ note, onClick }) => {
  const { id, title, content } = note
  const { addToast } = useToasts()

  function handleDeleteNote(id){
    // deletar nota na API
    addToast(`Nota excluída com sucesso!`, { appearance: 'info', autoDismiss: true })
  }

  return(
      <div className="note" onClick={onClick}>
        <h2 className="title">{title}</h2>
        <p className="content">{content.length > 120 ? content.substring(0,120) + "..." : content}</p>
        <div className="options">
          <button 
            className="delete-note-button" 
            onClick={() => handleDeleteNote(id)}
          >
            <TrashIcon size={24}/>
          </button>
        </div>
      </div>
  );
}

export default Note;