import React from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'

import './styles.css'

const Note = ({ id, title, content = "", date = new Date() }) => {
  
  function handleDeleteNote(id){
    // deletar nota
  }

  return(
      <div className="note">
        <h2>{title}</h2>
        <p>{content.length > 120 ? content.substring(0,120) + "..." : content}</p>
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