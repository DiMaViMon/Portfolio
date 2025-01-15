import decovideur from '../assets/decovideur.png'
import p4 from '../assets/p4.png'
import logo_rectorat from '../assets/logo_rectorat.png'
import logoloapique from '../assets/logo_loapique.png'
import Logo_LivreaPiques from '../assets/Logo_LivreaPiques.png'
import kwh_logo from '../assets/kwh_logo.png'

export const projectList = [
	{
		id: '1',
		cover: p4,
		name: "puissance 4",
		date: "Décembre 2022",
		desc: "Il s'agit d'un Puisance 4 pour un entreprise fictive, les Têtes à Clic. Il permet à deux enfants d'en disputer une partie.",
		learnt: "Compétence 1, Réaliser un développement d'application, Implémenter des conceptions simples, Faire des essais et évaluer leurs résultats en regard des spécifications, Compétence 2,Analyser le problème avec méthode, Comparer des algorithmes pour des problèmes classiques",
		languages: "C",
		category: 'IUT'
	},
	{
		id: '2',
		cover: decovideur,
		name: "Décovideur",
		date: "Mars 2022",
		desc: "C'est un démineur version 'Covid' réalisé en groupe de 3 dans le cadre du projet final de terminale en NSI.",
		learnt: "Compétence 1, Réaliser un développement d'application, Implémenter des conceptions, Elaborer des conceptions simples, Développer des interfaces utilisateur",
		languages: "JavaScript, HTML, CSS",
		category: 'Lycée'
	},
	{
		id: '3',
		cover: logo_rectorat,
		name: "Entrepôt de données agents",
		date: "Avril 2024",
		desc: "Dans le cadre de mon stage de deuxième année en parcours data/IA, j'ai conceptualisé et mis en place un entgrepôt de données répertiriant tous les agents de l'académie ainsi que leurs affectations à ce jour. J'ai puisé les informations de 11 sources defférentes et ai fait un ETL.",
		learnt: "Compétence 4,  gérer des données de l'information , Mettre à jour et interroger une base de données relationnelle, Visualiser des données, Concevoir une base de données relationnelle à partir d'un cahier des charges",
		languages: "PostGresSQL, Java",
		category: 'Professionnel',
	},
	{
		id: '4',
		cover: logoloapique,
		name: "LocAPique",
		date: "Année 2023-2024",
		desc: "Pour simuler une expérience en entreprise, j'ai réalisé avec un groupe de 6 autres personne un site web sur le modéle de AirBnB.",
		learnt: "Compétence 1, Implémenter des conceptions, faire des essais et évaluer les résultats en regard des spécifications, développer des interfaces utilisateur, Compétence 4, Gérer des données de l'information, concevoir une base de données relationnelle à partir d'un cahier des charges",
		languages: "HTML, CSS, JS, PostGresSQL, PHP",
		category: 'IUT'
	},
	{
		id: '5',
		cover: kwh_logo,
		name: "CRUD BDD",
		date: "Septembre 2025 - ce jour",
		desc: "En tant qu'alternante en Base de Données, je m'occupe de faire une interface afin que les gens non-techniques puisse interagire avec.",
		learnt: "Compétence 1, Elaborer des conceptions simples, Compétence 2, optimiser des applications informatiques, Analyser un problème avec méthodes, Compétence 4,  gérer des données de l'information , Mettre à jour et interroger une base de données relationnelle, Visualiser des données, Concevoir une base de données relationnelle à partir d'un cahier des charges, Compétence 6, travailler dans une équipe informatique, acquérir les compétences interpersonnelles pour travailler en équipe",
		languages: "HTML, CSS, PHP, PostGresSQL",
		category: 'Professionnel'
	},
	{
		id: '6',
		cover: Logo_LivreaPiques,
		name: "LivreAPic",
		date: "Septembre 2025 - ce jour",
		desc: "Lors de mes études, j'ai développé une application de recommandation de livres avec une intelligence artificielle.",
		learnt: "Compétence 1, Implémenter des conceptions, faire des essais et évaluer les résultats en regard des spécifications, développer des interfaces utilisateur, Compétence 4, Gérer des données de l'information, concevoir une base de données relationnelle à partir d'un cahier des charges",
		languages: "HTML, CSS, PHP, PostGresSQL",
		category: 'IUT'
	}
]