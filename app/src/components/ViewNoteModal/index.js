import React, { useRef, useState } from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import { useToasts } from 'react-toast-notifications';

import './styles.css'

function ViewNoteModal({ note = {}, onClose }) {
    const [ visible, setVisible ] = useState(true)
    const { addToast } = useToasts()

    const titleRef = useRef(null)
    const contentRef = useRef(null)

    function handleDeleteNote(id){
        // deletar nota na API
        addToast("Nota excluída com sucesso!", { appearance: 'info', autoDismiss: true })
        handleCloseModal()
    }

    function handleCloseModal(){
        // Fechar modal
        setVisible(false)
        onClose()
    }

    function handleBackgroundClick(event){
        // Fechar modal pelo background
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