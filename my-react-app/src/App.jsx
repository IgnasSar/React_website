import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import UnorderedList from './UnorderedList/UnorderedList.jsx';

function App() {
  return (
    <div className='mainContainer'>
      <UnorderedList/>
      <Header/>
    </div>
  );
}

export default App;