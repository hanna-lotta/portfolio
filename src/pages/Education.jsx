
import './Education.css'
import { studiesList } from '../data/studiesList'


const Education = () => {
	return (
		<div className="education">
		<h1>Projekt </h1>
		<div className="education-card">
		{studiesList.map((studie) => (
			<div className='my-education' key={studie.id}>
			<h3>{studie.title}</h3>
			<p>{studie.shortDescription}</p>
			<p>{studie.timeline}</p>
			<p>{studie.description}</p>
			Länk till Github pages: {studie.Link && (
				<p><a href={studie.Link} target="_blank" rel="noopener noreferrer">{studie.Link}</a></p>
			)}
			Länk till GitHub: {studie.github && (
				<p><a href={studie.github} target="_blank" rel="noopener noreferrer">{studie.github}</a></p>
			)}
			</div>
			
		))}
		
		</div>
		</div>
	)
}


export default Education