import {Component} from 'react';


class UserLogged extends Component {

    constructor(){
        super()
        this.state ={
            userLogged : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/user')
            .then(respuesta => respuesta.json())
            .then(userLogged => this.setState({ userLogged: userLogged.data[0] }))
            .catch(error => console.log(error))
        ;
    }


    render() {
        return (


        <li className="nav-item dropdown no-arrow">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.userLogged.name}</span>
    
        </li>

        );
    }
}

export default UserLogged