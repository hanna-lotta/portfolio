import { Link, useParams } from 'react-router'
import imgprofile from '../assets/img-profile.png'
import './Home.css'
import {CVList} from '../data/CVList'
import { workExperience } from '../data/workExperience'
import { myProfile } from '../data/myProfile'

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
		<h1 className='cv-mainheader'>CV</h1>
		<div className="CV-card">
			<div className="main-content">
				<h2 className='cv-header'>PROFIL</h2>
				<p>{myProfile.description}</p>

				<h2 className='cv-header'>UTBILDNING</h2>
			{CVList.map((cv) => (
				<div className='my-education' key={cv.id}>
				<h3>{cv.title}</h3>
				<h4>{cv.school} | {cv.period}</h4>
				<p>{cv.description}</p>
				</div>
			))}

			<h2 className='cv-header'>ARBETSLIVSERFARENHET</h2>
				{workExperience.map((experience) => (
					<div className='my-experience' key={experience.id}>
					<h3>{experience.title}</h3>
					<h4>{experience.company} | {experience.period}</h4>
					<p>{experience.description}</p>
					</div>
				))}
			</div>
		</div>	
		</div>
	  </div>
	)
  }
  
  export default Home