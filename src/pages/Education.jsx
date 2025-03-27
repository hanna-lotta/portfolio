import { Link, useParams } from 'react-router'
import './Education.css'
import { studiesList } from '../data/studiesList'


const Education = () => {
	return (
		<div className="education">
		<h2>Erfarenheter </h2>
		<div className="education-card">
		{studiesList.map((studie) => (
			<div className='my-education' key={studie.id}>
			<h3>{studie.title}</h3>
			<p>{studie.shortDescription}</p>
			<p>{studie.timeline}</p>
			</div>
			
		))}
		
		</div>
		</div>
	)
}


export default Education