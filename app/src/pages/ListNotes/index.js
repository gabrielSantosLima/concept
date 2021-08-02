import React from 'react';

import Note from '../../components/Note'

import './styles.css'

const ListNotes = () => {
  return(
      <>
        <h1>Listar notas</h1>
        <Note title="Titulo" content="Algo" />
      </>
  );
}

export default ListNotes;