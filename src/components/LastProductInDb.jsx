import {Component} from 'react';


class LastProductInDb extends Component {
    constructor(){
        super()
        this.state ={
            product : {}
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/dashboardLastProduct')
            .then(respuesta => respuesta.json())
            .then(product => this.setState({ product: product.data[0] }))
            .catch(error => console.log(error))
        ;
    }


    render() {
        return (


            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="" alt=" Imagen del producto "></img>
                        </div>
                        <p>{this.state.product.name}</p>
                        <p>{this.state.product.description}</p>
                        
                        
                    </div>
                </div>
            </div>
            );
        }
    }
    export default LastProductInDb;