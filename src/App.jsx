
import './App.css'
import { NavLink, Outlet } from 'react-router'



function App() {
	
	return (
		<>
		<header className="app">
		<h1>HANNA SELDÉN</h1>
		<nav className='links'>
			<NavLink to= "/">CV</NavLink>
			<NavLink to="/about"> Personligt Brev </NavLink>
			<NavLink to="/education"> Projekt </NavLink>
			<NavLink to="/lia"> LIA </NavLink>
		</nav>
		</header>
		<main>
			<Outlet />
		</main>
		</>
		
	)
}

export default App
