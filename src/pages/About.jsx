import { Link, useParams } from 'react-router'
import './About.css'
import { personalLetter } from '../data/personalLetter'

const About = () => {
	return (
 <div className="letter">
    <h1 className="letter-header">{personalLetter.title}</h1>
    <div className='letter-card' style={{ whiteSpace: "pre-line" }}>
      {personalLetter.content}
		 <p className="signature">{personalLetter.signature}</p>
    </div>
  </div>
	)	
}

export default About