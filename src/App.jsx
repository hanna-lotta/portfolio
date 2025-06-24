import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router'
import imgprofile from './assets/img-profile.png'


function App() {

  return (
    <>
      <header className="app">
		<h1>HANNA SELDÉN</h1>
		<nav className='links'>
			
			<NavLink to= "/">CV</NavLink>
			<NavLink to="/about"> Personligt Brev </NavLink>
			<NavLink to="/prodject"> Projekt </NavLink>
			<NavLink to="/education"> Projekt </NavLink>
			<NavLink to="/contact"> LIA </NavLink>
		</nav>
	  </header>
	  <main>
		<Outlet />
	  </main>
    </>

  )
}

export default App
