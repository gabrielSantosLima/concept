import React from 'react';
import { AiOutlinePlusCircle as AddIcon  } from 'react-icons/ai'

import './styles.css'

const NewNote = ({ onClick }) => {
  return (
    <div className="new-note" onClick={ onClick }>
      <button className="add-new-note">
        <AddIcon size={40}/>
      </button>
    </div>
  );
}

export default NewNote;