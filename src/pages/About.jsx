import { Link, useParams } from 'react-router'
import './About.css'
import { personalLetter } from '../data/personalLetter'

const About = () => {
	return (
	  <div className="letter">
		<h1 className='letter-header'>Personligt Brev</h1>
		<div className='letter-card'>
		{personalLetter.map((letter) => (
			<div className='personal-letter' key={letter.id}>
			<p>{letter.content}</p>
			<p className='signature'>{letter.signature}</p>
	  </div>
		
		))}
		</div>
		</div>
	)
  }
  
  export default About