import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import { useToasts } from 'react-toast-notifications'

import './styles.css'

function AddNoteModal({ onClose }) {
    const [ visible, setVisible ] = useState(true)
    const { addToast } = useToasts()
    
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        contentRef.current.focus()
    }, [])

    function handleAddNote(){
        // salvar nota na API
        const title = titleRef.current.innerText
        const content = contentRef.current.innerText

        const isNotBlank = title || content

        if(isNotBlank){
            // código de salvar aqui
            addToast("Nota salva com sucesso!", { appearance: 'success', autoDismiss: true })
            return handleCloseModal()
        }

        addToast("Erro ao cadastrar nota! Tente novamente.", { appearance: 'error', autoDismiss: true })
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
            handleAddNote()
            handleCloseModal()
        }
    }

    if(!visible){
        return <></>; 
    }

    return (
        <div className="background-blur" onClick={handleBackgroundClick}>
            <div className="view-note-modal">
                <span ref={titleRef} contentEditable="true" suppressContentEditableWarning>Sem Título</span>
                <p ref={contentRef} contentEditable="true"></p>
                <div className="options">
                    <button 
                        className="close-modal-button"
                        onClick={handleCloseModal}
                    >
                        <CloseIcon size={24}/>
                    </button>
                    <button 
                        className="add-note-button"
                        onClick={handleAddNote}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNoteModal;