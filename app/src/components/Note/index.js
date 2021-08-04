import React from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { useToasts } from 'react-toast-notifications'

import './styles.css'

import { deleteNote } from '../../api';

const Note = ({ note, onClick, onDelete }) => {
  const { id, title, content } = note
  const { addToast } = useToasts()

  async function handleDeleteNote() {
    await deleteNote(id).then(status => {
      if(status === 200 || status === 204) {
        onDelete()
        addToast(`Nota ${id} excluída.`, { appearance: 'info', autoDismiss: true, autoDismissTimeout: 2000 })
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
            onClick={() => handleDeleteNote()}
          >
            <TrashIcon size={24}/>
          </button>
        </div>
      </div>
  );
}

export default Note;