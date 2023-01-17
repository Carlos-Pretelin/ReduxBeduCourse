import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "../components/Menu"
import Usuarios from "../components/Usuarios/index"
import Tareas from './Tareas'
//CSS
import "../styles/App.scss"

const App = () => {
	const Tareas = ()=> <div>Tareas !!</div>
  return (
	<BrowserRouter>
		<Menu/>
		<Routes>
			<Route exact path='/Usuarios' element={<Usuarios/>} />
			<Route exact path='/Tareas' element={<Tareas/>} />
		</Routes>
	</BrowserRouter>
  )
}

export default App