import React from 'react';
import { AiOutlinePlusCircle as AddIcon  } from 'react-icons/ai'

import './styles.css'

const NewNote = () => {
  return (
    <div className="new-note">
      <button className="add-new-note">
        <AddIcon size={40}/>
      </button>
    </div>
  );
}

export default NewNote;