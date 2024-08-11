import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import UnorderedList from './UnorderedList/UnorderedList.jsx';
import CardRow from './CardRow/CardRow.jsx';

function App() {
  return (
    <>
      <Header />
      <div className='mainContainer'>
        <UnorderedList />
        <CardRow />
      </div>
    </>
  );
}

export default App;