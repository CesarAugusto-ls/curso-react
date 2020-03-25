import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem Vindo!</h1>
            <p className="lead">
                Utilize a barra superior para acessar as opções desejadas.
            </p>
            <hr className="my-4"/>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/cadastroprodutos" role="button">Cadastrar</Link>
                </p>
        </div>  
    )
}

export default Home