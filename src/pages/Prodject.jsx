import { Link, useParams } from 'react-router'

const Prodject = () => {
	return (

	  <div className="home">
		<h2>Mina projekt finns att se på github!</h2>
		<p>https://github.com/hanna-lotta</p>
		<section>
		  <h3>Foodtruck App</h3>
		  <h2>HTML, CSS, JavaScript (vanilla) – Publicerad på GitHub Pages</h2>
		  <p>Mitt första egna webbutvecklingsprojekt: en menyapp för en foodtruck där användaren kan välja rätter, lägga dem i kundvagn och skicka en beställning. Projektet inkluderar API-anrop för att hämta produktdata, och gav mig praktisk erfarenhet av DOM-manipulation, eventhantering och grundläggande asynkron JavaScript med fetch.
			🔗 https://hanna-lotta.github.io/foodtruck/
		  </p>
		  <ul>
			<li><Link to="/project/1">Projekt 1</Link></li>
			<li><Link to="/project/2">Projekt 2</Link></li>
			<li><Link to="/project/3">Projekt 3</Link></li>
		  </ul>
		
		</section>
	  </div>
	)
  }
  
  export default Prodject