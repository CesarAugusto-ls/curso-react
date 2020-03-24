import React from 'react';
import NavBar from './components/navbar'
import Rotas from './rotas'

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Rotas />
      </div>
    </>
  );
}

export default App;