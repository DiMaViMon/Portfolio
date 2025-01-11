import '../styles/Footer.css'
import cv from '../assets/CV_Diane.pdf'

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="contact-info">
					<h4>Contact</h4>
					<p>Email : diane.moneger@etudiant.univ-rennes.fr</p>
				</div>
				<div className="cv-download">
					<a href={cv} download={cv}className="cv-button">Télécharger  mon CV</a>
				</div>
				</div>
		</footer>
	)
}

export default Footer