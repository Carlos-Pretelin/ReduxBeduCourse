import React, {Component} from 'react'
import axios from 'axios';
//Css
import "../styles/App.scss"

class App extends Component{
	constructor(){
		super();
		this.state = {
			usuarios: []
		}
	}

	async componentDidMount(){
		const res = await axios.get("https://jsonplaceholder.typicode.com/users");
		console.log(res)
		const data = res.data
		console.log(data)
		this.setState({
			usuarios: [
				{
					nombre: "Carlos",
					correo: "carlosppretelin@gmail.com",
					enlace: "CarlosPretelin.com",
					id: 1
				},
				{
					nombre: "Platzi",
					correo: "Platzi@platzi.com",
					enlace: "Platzi.com",
					id: 2
				}
			]
		})
		
	}

   ponerFilas = () => (
	this.state.usuarios.map( (usuario) => (
		<tr key={usuario.id}>
			<td>
				{usuario.nombre}
			</td>
			<td>
				{usuario.correo}
			</td>
			<td>
				{usuario.enlace}
			</td>
		</tr>
	))
   )


  render(){
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

export default App