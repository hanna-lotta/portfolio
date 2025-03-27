import { Link, useParams } from 'react-router'
import './Contact.css'

const Contact = () => {
	return (
	  <div className="contact">
		<h2>Kontakter </h2>
		<section className="my-contacts">
		<h3>David Andersson</h3>
		<p>Lärare på NBI/Handelsakademin</p>
		<p>E-post: <Link>david.andersson@zoocom.se</Link></p>
		</section>
		<section className="my-contacts">
		<h3>David Andersson</h3>
		<p>Lärare på NBI/Handelsakademin</p>
		<p>E-post: <Link>david.andersson@zoocom.se</Link></p>
		</section>
	  </div>
	)
  }
  
  export default Contact