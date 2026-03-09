import { Link, useOutletContext } from 'react-router'
import imgprofile from '../assets/img-profile.png'
import './Home.css'
import {CVList} from '../data/CVList'
import { workExperience } from '../data/workExperience'
import { myProfile } from '../data/myProfile'
import { homeTitles } from '../data/homeTitles'

const Home = () => {
	const { language } = useOutletContext()
	const profile = myProfile?.[language] ?? myProfile.sv ?? { description: '' }
	const items = CVList?.[language] ?? CVList.sv ?? []
	const experiences = workExperience?.[language] ?? workExperience.sv ?? []
	const titles = homeTitles?.[language] ?? homeTitles.sv

	return (
	  <div className="home">
		<div className='sidebar'> <img src={imgprofile} className="imgprofile" alt="img Hanna" />
		<h2 className='kontact'>{titles.contact}</h2>
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
		<h2 className='skills'>{titles.skills}</h2>
		<ul className='skills-list'>
			<li>HTML/CSS</li>
			<li>Javascript</li>
			<li>REACT</li>
			<li>Git/GitHub</li>
			<li>Figma</li>
			<li>Pixlr</li>
			<li>Node.js</li>
			<li>VS Code</li>
			<li>API (data fetching)</li>
			<li>Firestore</li>
			<li>UX/UI</li>
			<li>Zustand</li>
			<li>CRUD</li>
			<li>Validering/Joi/Zod</li>
			<li>SCRUM</li>
			<li>Trello</li>
			<li>React Routing</li>
			<li>Responsiv design</li>
			<li>Tillgänglighet</li>
			<li>Agila metoder</li>
			<li>Testning(End-to-End & Playwright)</li>
			<li>Fullstack</li>
			<li>Typrescript</li>
			<li>Express (REST API)</li>
			<li>JWT</li>
			<li>Insomnia</li>
			<li>DynamoDB</li>
			<li>AWS</li>
			<li>openAI</li>
			<li>Tesseract.js</li>
			<li>Render</li>
		</ul>
		<h2 className='languages'>{titles.languages}</h2>
		<ul className='languages-list'>
			<li>Svenska (modersmål)</li>
			<li>Engelska (flytande)</li>
		</ul>
		<h2 className='references'>{titles.references}</h2>
		<p className='references-list'>Referenser lämnas gärna på begäran.</p>
		</div>
		<div className="CV">
		<h1 className='cv-mainheader'>CV</h1>
		<div className="CV-card">
			<div className="main-content">
				<h2 className='cv-header'>{titles.profile}</h2>
				<p className='profile'>{profile.description}</p>

				<h2 className='cv-header'>{titles.education}</h2>
			{items.map((cv) => (
				<div className='my-education' key={cv.id}>
				<h3>{cv.title}</h3>
				<h4>{cv.school} | {cv.period}</h4>
				<p>{cv.description}</p>
				</div>
			))}

			<h2 className='cv-header'>{titles.workExperience}</h2>
				{experiences.map((experience) => (
					<div className='my-experience' key={experience.id}>
					<h3>{experience.title}</h3>
					<h4>{experience.company} | {experience.period}</h4>
					<h4>Arbetsgivare: {experience.employer}</h4>
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