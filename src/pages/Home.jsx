import { Link, useParams } from 'react-router'
import imgprofile from '../assets/img-profile.png'
import './Home.css'
import {CVList} from '../data/CVList'
const Home = () => {
	return (
	  <div className="home">
		<div className='sidebar'> <img src={imgprofile} className="imgprofile" alt="img Hanna" />
		<h2 className='kontact'>KONTAKT</h2>
		<ul className='kontact-list'>
			<li>Hanna Seldén</li>
			<li>Telefon: 0762 48 39 14</li>
			<li>
    		E-post: <br />
			<a href="mailto:hanna_lotta@hotmail.com">hanna_lotta@hotmail.com</a>
  			</li>
  			<li>
   	 		Github: <br />
			<a href="https://github.com/hanna-lotta" target="_blank" rel="noopener noreferrer">www.github.com/hanna-lotta</a>
  			</li>
		</ul>
		<h2 className='skills'>KOMPETENSER</h2>
		<ul className='skills-list'>
			<li>HTML/CSS</li>
			<li>Javascript</li>
			<li>REACT</li>
			<li>Git/GitHub</li>
			<li>Node.js</li>
			<li>VS Code</li>
			<li>REST API:er</li>
			<li>Firestore</li>
			<li>UX/UI</li>
			<li>Responsiv design</li>
			<li>Tillgänglighet</li>
			<li>Agila metoder</li>
			<li>Testning</li>
			<li>Typrescript</li>
		</ul>
		<h2 className='languages'>SPRÅK</h2>
		<ul className='languages-list'>
			<li>Svenska (modersmål)</li>
			<li>Engelska (flytande)</li>
		</ul>
		<h2 className='references'>REFERENSER</h2>
		<ul className='references-list'>
			<li>Magdalena Fagerlind</li>
			<li>Utbildningsledare NBI/ <br />Handelsakademin</li>
			<li>E-post: <Link>magdalena.fagerlind@zoocom	.se</Link></li>
			<li>Telefon: 070-123 45 67</li>
		</ul>
		<p>Övriga referenser lämnas gärna på begäran.</p>
		</div>
		<div className="CV">
		<h2 className='cv-header'>Frontendutvecklare (YH)</h2>
		<h2 className='cv-header'>NBI/Handelsakademin, Göteborg | 2024–2026</h2>
		<div className="CV-card">
		 <div className="main-content">
			{CVList.map((cv) => (
				<div className='my-education' key={cv.id}>
				<h3>{cv.title}</h3>
				<p>{cv.description}</p>
				</div>
			))}
		</div>
		</div>
			{/*
		<h2>Frontendutvecklare (YH)</h2>
		<h2>NBI/Handelsakademin, Göteborg | 2024–2026</h2>
		<p>Praktisk och yrkesinriktad utbildning med fokus på moderna webbutvecklingsverktyg och agila arbetssätt. Vi arbetar med HTML, CSS, JavaScript, React, Git/GitHub, REST API:er, Firestore, UX/UI, testning och TypeScript (fullstackmodul). Fokus ligger på att bygga responsiva, tillgängliga och funktionella webbapplikationer i team och individuellt.</p>
		<ul>
			<li>HTML, CSS, JavaScript och React</li>
			<li>Git/GitHub för versionshantering och samarbete</li>
			<li>REST API:er för datakommunikation</li>
			<li>Firestore för datalagring och hantering</li>
			<li>UX/UI-designprinciper för användarcentrerad utveckling</li>
			<li>Responsiv design för olika enheter och skärmstorlekar</li>
			<li>Tillgänglighet för att säkerställa att webbplatser är användbara för alla</li>
			<li>Agila metoder för effektivt teamarbete och projektledning</li>
			<li>Testning för att säkerställa kodkvalitet och funktionalitet</li>
			<li>TypeScript för typad JavaScript-utveckling</li>
			<li>Fullstack med TypeScript (kommande kursmodul)</li>
		</ul>*/}
		</div>
	  </div>
	)
  }
  
  export default Home