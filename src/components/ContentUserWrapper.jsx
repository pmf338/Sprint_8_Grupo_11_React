import {Component} from 'react';
import Users from './Users';

class ContentUserWrapper extends Component {
    constructor(){
        super()
        this.state ={
            usersList : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3002/api/dashboardUsers')
            .then(respuesta => respuesta.json())
            .then(user => this.setState({ usersList: user.data }))
            .catch(error => console.log(error))
        ;
    }
	
	render() {
		return (
			<>
				{/*<!-- USERS LIST -->*/}
				
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
                        <h1 className="h3 mb-2 text-gray-800">Todos los usuarios en la base de datos</h1>
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Nombre de usuario</th>
										<th>Email</th>
                                        <th>Dirección</th>
                                        <th>Imagen de perfil</th>
									</tr>
								</thead>
						
								<tbody>
								{
										
										this.state.usersList.map((user,index)=>{
											return <Users  {...user} key={index}  />
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

export default ContentUserWrapper;