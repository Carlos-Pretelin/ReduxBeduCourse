import React, {Component} from 'react'
import axios from 'axios';



class Usuarios extends Component{
	constructor(){
		super();
		this.state = {
			usuarios: []
		}
	}

	async componentDidMount(){
		const res = await axios.get("https://jsonplaceholder.typicode.com/users");
		//console.log(res)
		const data = res.data
		console.log(data)
		this.setState({
			usuarios: data
		})
		
	}

   ponerFilas = () => (
	this.state.usuarios.map( (usuario) => (
		<tr key={usuario.id}>
			<td>
				{usuario.name}
			</td>
			<td>
				{usuario.email}
			</td>
			<td>
				{usuario.website}
			</td>
		</tr>
	))
   )


  render(){
	//console.log("Este es en el render")
	//console.log(this.state.usuarios)
	return (
		
		<div className="margen">
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
	  )
  }
}

export default Usuarios