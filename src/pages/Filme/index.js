import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import './filme.css';


class Filme extends Component{

    constructor(props){
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({movie: json});
        });
    }

    render(){
        return(
            <div className="filme-info">
              <h1>{this.state.movie.nome}</h1>
              <img src={this.state.movie.foto}/>
              {this.state.movie.length !== 0 &&
                <h3>Sinopse</h3>
              }
              
              {this.state.movie.sinopse}
              <Link to={'/'}>Voltar</Link>
            </div>
        );
    }
}
export default Filme;