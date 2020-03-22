import React from 'react'

const stateInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: ''
}

class CadastroProduto extends React.Component {

    state = stateInicial

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name

        this.setState({
            [nomeCampo]: valor
        })
    }

    onSubmit = (event) => {
        console.log(this.state)
    }

    limparCampos = () => {
        this.setState(stateInicial)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de produtos
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU *</label>
                                <input
                                    type="text"
                                    name="sku"
                                    value={this.state.sku}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descriçã *</label>
                                <textarea
                                    name="descricao"
                                    value={this.state.descricao}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço *</label>
                                <input
                                    type="text"
                                    name="preco"
                                    value={this.state.preco}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor *</label>
                                <input
                                    type="text"
                                    name="fornecedor"
                                    value={this.state.fornecedor}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success" >Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.limparCampos} className="btn btn-primary" >Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroProduto