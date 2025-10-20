
import './LIA.css'
 import { useOutletContext } from 'react-router'
import { lia } from '../data/lia'

const LIA = () => {
	const { language } = useOutletContext()
	const t = lia[language] || lia.sv
	return (
	  <div className="lia">
		<h1>{t.title}</h1>
		<section className="my-contacts">
		<h3>{t.seeking}</h3>
		<h3>{t.period1}</h3>
		<h3>{t.period2}</h3>
		<p>{t.between}</p>
		</section>
	  </div>
	)
  }
  
  export default LIA