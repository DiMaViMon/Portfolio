import '../styles/About.css'
import blaise from '../assets/blaise.png'
import lonion from '../assets/lonion.png'
import moi from '../assets/moi.jpg'

function About() {
	return (
		<div className="accueil">
			<div className="presentation">
				<div className="presentation-text">
					<h2>Bienvenue sur mon portfolio</h2>
					<p>
					Bonjour, je m’appelle Diane Monéger, j'ai 20 ans et je suis étudiante en BUT informatique à l’IUT de Lannion.
					J'étudie les bases de données et je vais vous faire part sur ce site des projets réalisés lors de mes études ainsi que dans le cadre de mon alternance.</p>
					<p>J'ai pour ambition de continuer mes études en école d'ingénieur après mon BUT.
					</p>
				</div>
				<div className="presentation-image">
					<img src={moi} alt={`${moi} cover`}></img>
				</div>
			</div>
			<div className="parcours">
				<h2>Mon Parcours Scolaire</h2>
				<div className="parcours-container">
					<div className="parcours-item">
						<a href="https://lyc-blaise-pascal-clermont.ent.auvergnerhonealpes.fr/">
							<img src={blaise} alt={`${blaise} cover`}></img>
						</a>
						<p>Bac section européenne général</p>
						<p>spécialité LLCER / NSI</p>
					</div>
					<div className="parcours-item">
						<a href="https://iut-lannion.univ-rennes.fr/informatique">
							<img src={lonion} alt={`${lonion} cover`}></img>
						</a>
						<p>BUT informatique (En Cours)</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default About