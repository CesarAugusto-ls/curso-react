import React from 'react'
import ProdutoService from '../../app/produto-service'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends React.Component {

    state = {
        produtos: []
    }

    constructor() {
        super()
        this.service = new ProdutoService()
    }
 
    componentDidMount() {
        const produtos = this.service.consultarProdutos()
        this.setState({ produtos })
    }

    preparaEditar = (sku) => {
        this.props.history.push('/cadastroprodutos/'+sku)
    }

    deletarProduto = sku => {
        const produtos = this.service.deletarProduto(sku)
        this.setState({produtos})
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta produtos
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr className="thead-dark">
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th className="float-right">
                                                <button onClick={() => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>

                                                <button onClick={() => this.deletarProduto(produto.sku)} className="btn btn-danger">Remover</button>
                                            </th>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default withRouter(ConsultaProdutos)