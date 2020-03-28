import React from 'react'
import ProdutoService from '../../app/produto-service'
import Card from '../../components/card'

const stateInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    erros: [],
    atualizando: false,
    msgAtualizando: false
}

class CadastroProduto extends React.Component {

    state = stateInicial

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name

        this.setState({
            [nomeCampo]: valor
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }

        try {
            this.service.salvar(produto)
            this.limparCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
            const erros = erro.erros
            this.setState({ erros: erros })
        }
    }

    limparCampos = () => {
        const msg = this.state.atualizando;
        if(this.state.atualizando){
            this.props.history.push('/cadastroprodutos');
        }
        this.setState(stateInicial)
        this.setState({msgAtualizando: msg})
    }

    componentDidMount() {
        const sku = this.props.match.params.sku
        if (sku) {
            const resultado = this.service.consultarProdutos().filter(produto => produto.sku === sku)
            if (resultado.length === 1) {
                const produtoEncontrado = resultado[0]
                this.setState({ ...produtoEncontrado, atualizando: true })
            }
        } else {
            this.setState({ stateInicial })
        }
    }

    render() {
        return (
            <Card header={(this.state.atualizando ? 'Atualização ' : 'Cadastro ') + "de produtos"}>

                <form id="frmProduto" onSubmit={this.onSubmit}>

                    {
                        this.state.sucesso &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Sucesso! </strong>
                                Produto {this.state.msgAtualizando ? 'Atualizado ' : 'cadastrado '} com sucesso
                            </div>
                    }

                    {
                        this.state.erros.length > 0 &&

                        this.state.erros.map(msg => {
                            return (
                                <div key={"msg"+msg.length} className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                    }

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
                                    disabled={this.state.atualizando}
                                    value={this.state.sku}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição </label>
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
                            <button type="submit" className="btn btn-success" >
                                {this.state.atualizando ? 'Atualizar' : 'Cadastrar'}
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button type="reset" onClick={this.limparCampos} className="btn btn-primary" >Limpar</button>
                        </div>
                    </div>

                </form>
            </Card>
        )
    }
}

export default CadastroProduto