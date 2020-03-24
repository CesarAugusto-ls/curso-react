const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(erros){
    this.erros = erros;
}

export default class ProdutoService {

    validar = (produto) => {
        const erros = []

        if(!produto.nome){
            erros.push('O campo Nome é obrigatorio')
        }
        if(!produto.sku){
            erros.push('O campo SKU é obrigatorio')
        }
        if(!produto.preco || produto.preco <= 0){
            erros.push('O campo Preço deve ter um valor maior que 0')
        }
        if(!produto.fornecedor){
            erros.push('O campo Fornecedor é obrigatorio')
        }

        if(erros.length > 0){
            throw new ErroValidacao(erros)
        }
    }

    salvar = (produto) => {
        this.validar(produto)
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}