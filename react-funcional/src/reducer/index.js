import React, { useState } from 'react';

import useStore from './somaReducer'

function ReducerHook() {

  const [numero, setNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')

  const [store, dispatch] = useStore()

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    dispatch({
        type: 'SOMA',
        payload: numeroInt + segundoNumeroInt
    })
  }

  return (
    <div className="App">
      Numero 1:<br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br />
      Numero 2:<br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button onClick={somar}>somar</button><br />
      Resultado:<br />
      <input type="text" value={store.resultado} readOnly /><br />
    </div>
  );
}

export default ReducerHook;
