import {Component} from 'react';
//import CategoriesList from './CategoriesList';
//import {useParams} from 'react-router-dom';

// const SearchCategory = () => {

// 	const {id} = useParams();

// 	useEffect
// }

class ContentCategoriesWrapper extends Component {
    constructor(){
        super()
        this.state ={
            categoriesList : [],
			productsList : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/productsByCategory')
            .then(respuesta => respuesta.json())
            .then(categories => this.setState({ categoriesList: categories.data }))
            .catch(error => console.log(error))
        ;
    }
	
	render() {
		return (
			<>
				{/*<!-- CATEGORIES LIST -->*/}
				
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
                        <h1 className="h3 mb-2 text-gray-800">Todas las categorias en la base de datos</h1>
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Cantidad</th>
										<th>Categoria</th>
										
										
									</tr>
								</thead>
						
								<tbody>
									{/* <CategoriesList/> */}
									{/* {
										
											this.state.categoriesList.map((category,index)=>{
											return <CategoriesList  {...category} key={index}  />
										})
									} */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default ContentCategoriesWrapper;