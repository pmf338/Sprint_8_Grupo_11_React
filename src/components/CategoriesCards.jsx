import {Component} from 'react';
import Category from './Category';



class CategoriesCards extends Component {
    constructor(){
        super()
        this.state ={
            categoriesList : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/dashboardCategories')
            .then(respuesta => respuesta.json())
            .then(category => this.setState({ categoriesList: category.data }))
            .catch(error => console.log(error))
        ;
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Categorias en la base de datos</h5>
								</div>
            <div>
            {
                //console.log(this.state.movies)
                this.state.categoriesList.map((category,index)=>{
                    return <Category  {...category} key={index}  />
                })
            }
            </div>
        
            </div>
            </div>
                        );
                    }
                }
                export default CategoriesCards;                