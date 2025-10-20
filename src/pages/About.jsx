
import './About.css'
import { personalLetter } from '../data/personalLetter'
import { useOutletContext } from 'react-router'	

const About = () => {
	const { language } = useOutletContext()
	const letter = personalLetter?.[language] ?? personalLetter.sv ?? { title: '', content: '', signature: '' }

	return (
 <div className="letter">
    <h1 className="letter-header">{letter.title}</h1>
    <div className='letter-card' style={{ whiteSpace: "pre-line" }}>
      {letter.content}
		 <p className="signature">{letter.signature}</p>
    </div>
  </div>
	)	
}

export default About