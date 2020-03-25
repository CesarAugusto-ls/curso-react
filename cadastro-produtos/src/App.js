import React from 'react';
import NavBar from './components/navbar'
import Rotas from './rotas'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container-fluid">
        <Rotas />
      </div>
    </HashRouter>
  );
}

export default App;
