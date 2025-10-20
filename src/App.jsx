
import './App.css'
import { NavLink, Outlet } from 'react-router'
import { useState } from 'react'
import { pageTitle as liaTitle } from './data/lia'
import { pageTitle as aboutTitle } from './data/personalLetter'
import { pageTitle as projectsTitle } from './data/studiesList'




function App() {
	const [language, setLanguage] = useState('sv')
	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'sv' ? 'eng' : 'sv'))
	}
	return (
		<>
		<header className="app">
		<h1>HANNA SELDÉN</h1>
		

		<nav className='links'>
			<NavLink to= "/">CV</NavLink>
			<NavLink to="/about">{aboutTitle?.[language] ?? 'Personligt Brev'}</NavLink>
			<NavLink to="/education">{projectsTitle?.[language] ?? 'Projekt'}</NavLink>
			<NavLink to="/lia">{liaTitle?.[language] ?? 'LIA'}</NavLink>
		</nav>
		<button className='languageButton' onClick={toggleLanguage}>
			{language === 'sv' ? 'ENG' : 'SV'}
		</button>
		</header>
		<main>
			<Outlet context={{ language }}/>
		</main>
		</>
		
	)
}

export default App
