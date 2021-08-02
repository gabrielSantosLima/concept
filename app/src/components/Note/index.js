import React from 'react';

import './styles.css'

const Note = ({ title, content, date = new Date() }) => {
  return(
      <p>{title}, {content}, em {date.toTimeString()}</p>
  );
}

export default Note;