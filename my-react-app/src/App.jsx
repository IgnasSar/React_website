import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import UnorderedList from './UnorderedList/UnorderedList.jsx';
import CardRow from './CardRow/CardRow.jsx';

function App() {
  const rows = Array.from({length: 3});

  return (
    <>
      <Header />
      <div className='bodyContainer'>
        <UnorderedList />
        <div className='bodyCardRowContainer'>
        {
          rows.map((_, index) => (<CardRow key = {index}/>))
        }
        </div>
      </div>
    </>
  );
}

export default App;