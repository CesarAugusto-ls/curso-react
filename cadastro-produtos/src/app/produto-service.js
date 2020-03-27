const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(erros) {
    this.erros = erros;
}

export default class ProdutoService {

    validar = (produto) => {
        const erros = []

        if (!produto.nome) {
            erros.push('O campo Nome é obrigatorio')
        }
        if (!produto.sku) {
            erros.push('O campo SKU é obrigatorio')
        }
        if (!produto.preco || produto.preco <= 0) {
            erros.push('O campo Preço deve ter um valor maior que 0')
        }
        if (!produto.fornecedor) {
            erros.push('O campo Fornecedor é obrigatorio')
        }

        if (erros.length > 0) {
            throw new ErroValidacao(erros)
        }
    }

    obterIndex = (sku) => {
        let index = null;
        this.consultarProdutos().forEach((produto, i) => {
            if (produto.sku === sku) {
                index = i
            }
        })
        return index
    }

    salvar = (produto) => {
        this.validar(produto)
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        const index = this.obterIndex(produto.sku)
        if (index === null) {
            produtos.push(produto);
        } else {
            produtos[index] = produto
        }

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }

    consultarProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        if (!produtos) {
            return []
        }
        return JSON.parse(produtos)
    }

    deletarProduto = (sku) => {
        const index = this.obterIndex(sku)
        if(index !== null){
            const produtos = this.consultarProdutos()
            produtos.splice(index, 1)
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
            return produtos
        }
    }

}