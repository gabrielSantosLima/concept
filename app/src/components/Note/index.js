import React from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { useToasts } from 'react-toast-notifications'

import './styles.css'

async function deleteNote(id) {
  return await fetch(`http://localhost:3333/notes/${id}`, { method: 'DELETE' }).then(res => res.status)
}

const Note = ({ note, onClick }) => {
  const { id, title, content } = note
  const { addToast } = useToasts()

  async function handleDeleteNote(id) {
    await deleteNote(id).then(status => {
      if(status === 200) {
        addToast(`Nota ${id} excluída.`, { appearance: 'info', autoDismiss: true })
      } else {
        addToast(`Erro ao deletar nota!`, { appearance: 'error', autoDismiss: true })
      }
    })
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