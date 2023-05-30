import {Component} from 'react';

class LastProductInDb extends Component {

    constructor(){
        super()
        this.state ={
            product : []
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
                            
                        </div>
                       
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Nombre</span>
                        <p>{this.state.product.name}</p>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Descripción</span>
                        <p>{this.state.product.description}</p>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Precio</span>
                        <p>{this.state.product.price}</p>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Sku</span>
                        <p>{this.state.product.sku}</p>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Cantidad</span>
                        <p>{this.state.product.quantity}</p>
                        
                        
                    </div>
                </div>
            </div>
            );
        }
    }
    export default LastProductInDb;