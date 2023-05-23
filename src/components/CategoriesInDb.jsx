import {Component} from 'react';


class CategoriesInDb extends Component {
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
          <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Cantidad de Categorias
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {console.log("ctegorias",this.state.categoriesList)}
                     {this.state.categoriesList.length}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-film fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default CategoriesInDb;