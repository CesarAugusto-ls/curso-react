import React, { useState, useEffect } from 'react';

function App() {

  const [numero, setNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')
  const [resultado, setRsultado] = useState('')

  // const [state, setState] = useState({
  //   nuemro: 0,
  //   segundoNumero: 0,
  //   resultado: 0
  // })

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    setRsultado(numeroInt + segundoNumeroInt)
  }

  useEffect(() => {
    console.log('variavel numero: ', numero)
  })

  return (
    <div className="App">
      Numero 1:<br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br />
      Numero 2:<br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button onClick={somar}>somar</button><br />
      Resultado:<br />
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default App;
