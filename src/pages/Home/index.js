import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
        this.loadmovie = this.loadmovie.bind(this);
    }

    componentDidMount(){
        this.loadmovie();
    }

    loadmovie(){
        //url da API https://sujeitoprogramador.com/ri-api/?api=filmes/
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((r) => r.json())
        .then((jason)=> {
            this.setState({movies: jason});
            console.log(jason);
        });

    }

    render(){
        return(
            <div className="container">
                <div className="lista-filme">
                    {this.state.movies.map((movie) =>{
                        return(
                            <article key={movie.id} className="filme">
                                <strong>{movie.nome}</strong>
                                <img src={movie.foto} alt="capa"/>
                                <Link to="/">Acessar</Link>
                            </article>
                        )

                    })}
                </div>
            </div>
        );
    }
}

export default Home;