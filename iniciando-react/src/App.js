import React from 'react';

function ComponenteFuncional(props) {

  const modificarNome = (event) => {
      console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ["fulano", "fulano2"]
    const comboBoxOptions = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOptions}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()

  return (
    <React.Fragment>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1>Hello ComponenteFuncional {props.nome}</h1>
      <p>teste</p>

      {criaComboBox()}

      <MeuComboBox />

      <>
        <h1>Hello {props.nome}</h1>
        <p>teste</p>
      </>

      <div>
        <h1>Hello from app {props.idade}</h1>
        <p>teste</p>
      </div>
    </React.Fragment>
  )
}

class App extends React.Component {

  state = {
    nome: ''
  }

  // constructor() {
  //   super()
  //   this.modificarNome = this.modificarNome.bind(this)
  // }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  // modificarNome(event) {
  //   this.setState({
  //     nome: event.target.value
  //   })
  // }

  criaComboBox = () => {
    const opcoes = ["fulano", "fulano2"]
    const comboBoxOptions = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOptions}
      </select>
    )
  }

  
  componentDidMount(){
    console.log('executou componentDidMount')
  }

  render() {
    const MeuComboBox = () => this.criaComboBox()
    console.log('executou render')

    return (
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello from app {this.state.nome}</h1>
        <p>teste</p>

        {this.criaComboBox()}

        <MeuComboBox />

        <>
          <h1>Hello {this.props.nome}</h1>
          <p>teste</p>
        </>

        <div>
          <h1>Hello from app {this.props.idade}</h1>
          <p>teste</p>
        </div>
      </React.Fragment>
    )
  }
}

export default App;