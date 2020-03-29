import React from 'react'
import ProdutoService from '../../app/produto-service'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import ProdutosTable from './produtosTable'

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
        this.props.history.push('/cadastroprodutos/' + sku)
    }

    deletarProduto = sku => {
        const produtos = this.service.deletarProduto(sku)
        this.setState({ produtos })
    }

    render() {
        return (
            <Card header="Consulta de produtos" className="table-responsive">
                <ProdutosTable produtos={this.state.produtos}
                    editarAction={this.preparaEditar}
                    deletarAction={this.deletarProduto} />
            </Card>
        )
    }

}

export default withRouter(ConsultaProdutos)