import {Component} from 'react';
import Products from './Products';

class ProductsList extends Component {
    constructor(){
        super()
        this.state ={
            productList : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/dashboardProducts')
            .then(respuesta => respuesta.json())
            .then(product => this.setState({ productList: product.data }))
            .catch(error => console.log(error))
        ;
    }
	
	render() {
		return (
			<>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">Todos los productos en la base de datos</h1>
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Sku</th>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Stock</th>
										<th>Artista</th>
									</tr>
								</thead>
						
								<tbody>
								{
										//console.log(this.state.movies)
										this.state.productList.map((product,index)=>{
											return <Products  {...product} key={index}  />
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default ProductsList;