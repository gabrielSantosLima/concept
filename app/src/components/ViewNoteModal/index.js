import React, { useRef, useState } from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import { useToasts } from 'react-toast-notifications';

import './styles.css'

import { updateNote, deleteNote } from '../../api'

function ViewNoteModal({ note = {}, onClose, onDelete }) {
    const [ visible, setVisible ] = useState(true)
    const { addToast } = useToasts()

    const titleRef = useRef(null)
    const contentRef = useRef(null)

    async function handleDeleteNote(id){
        await deleteNote(id).then(status => {
            if(status === 200 || status === 204) {
              onDelete()
              addToast(`Nota ${id} excluída.`, { appearance: 'info', autoDismiss: true, autoDismissTimeout: 2000 })
            } else {
              addToast(`Erro ao deletar nota!`, { appearance: 'error', autoDismiss: true })
            }
          })
        handleCloseModal()
    }

    function handleCloseModal(){
        note.title = titleRef.current.innerText
        note.content = contentRef.current.innerText

        updateNote(note.id, note.title, note.content)

        setVisible(false)
        onClose()
    }

    function handleBackgroundClick(event){
        const { className } = event.target
        if(className === 'background-blur'){
            handleCloseModal()
        }
    }

    if(!visible){
        return <></>; 
    }

    return (
        <div className="background-blur" onClick={handleBackgroundClick}>
            <div className="view-note-modal">
                <span ref={titleRef} contentEditable="true">{ note.title }</span>
                <pre ref={contentRef} contentEditable="true">{ note.content }</pre>
                <div className="options">
                    <button 
                        className="close-modal-button"
                        onClick={handleCloseModal}
                    >
                        <CloseIcon size={24}/>
                    </button>
                    <button 
                        className="delete-note-button" 
                        onClick={() => handleDeleteNote(note.id)}
                    >
                        <TrashIcon size={24}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewNoteModal;