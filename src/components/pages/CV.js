import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../assets/Styles/CV.module.css';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function CV () {
  return (
    <section id="top">
        <div className={Styles.curriculum}>
            <Fade bottom cascade>
                <div className={Styles.container1}>
                    <div className='formations'>
                        <h2 className={Styles.heading}>
                            Formations
                        </h2>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Développeur web
                            </h3>
                            <h4 className={Styles.location_date}>
                                OpensClassRooms - 2022
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Créer une application immobilière - React</li>
                                <li>Construire une API sécurisée - Node.js / MongoDB</li>
                                <li>Construire un site e-commerce - Javascript</li>
                                <li>Optimiser un site web existant - SEO/Accessibilité</li>
                                <li>Dynamiser une page web avec des animations - SASS/CSS</li>
                                <li>Transformer une maquette en site web - HTML & CSS</li>
                            </ul>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Responsable manager de la distribution ( Bac +3 )
                            </h3>
                            <h4 className={Styles.location_date}>
                                CCI Formation Annecy - 2017
                            </h4>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                BTS Management des Unités Commerciales
                            </h3>
                            <h4 className={Styles.location_date}>
                                CCI Formation Annecy - 2016
                            </h4>
                        </div>
                    </div>
                    <div className='experience'>
                        <h2 className={Styles.heading}>
                            Parcours professionnel
                        </h2>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Assistante commerciale
                            </h3>
                            <h4 className={Styles.location_date}>
                                Astoria Finance Annecy - Juin 2020 / Février 2022
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Gestion du back-office (courriers, fournitures)</li>
                                <li>Accueil physique et téléphonique</li>
                                <li>Gestion administrative des dossiers adhérents</li>
                                <li>Opération de rachats de fonds</li>
                            </ul>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Assistante technique
                            </h3>
                            <h4 className={Styles.location_date}>
                                Socotec Annecy - Décembre 2018 / Mars 2020
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Planification du planning des techniciens</li>
                                <li>Gestion administrative de la clientèle (création des devis, suivi, facturation)</li>
                                <li>Production, vérification de rapports de diagnostics</li>
                            </ul>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Coordonnatrice d'équipe
                            </h3>
                            <h4 className={Styles.location_date}>
                                Auchan Epagny - Aout 2017 / Mai 2018
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Gestion de la maintenance des rayons: attractivité, rangement, mise en rayon</li>
                                <li>Gestion administrative de l'équipe de maintenance (8 collaborateurs) : planning, besoin en personnel, demande de congés, accueil des intérimaires</li>
                            </ul>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Coordonnatrice d'équipe en alternance
                            </h3>
                            <h4 className={Styles.location_date}>
                                Auchan Drive Epagny - Août 2016 / Août 2017
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Recrutement des étudiants</li>
                                <li>Accueil et intégration des nouveaux collaborateurs</li>
                                <li>Pilotage des équipes (10 à 30 collaborateurs)</li>
                                <li>Optimisation des stocks, gestion de l'inventaire</li>
                                <li>Organisation des animations clients</li>
                            </ul>
                        </div>
                        <div className={Styles.content}>
                            <h3 className={Styles.title}>
                                Guichetière en alternance
                            </h3>
                            <h4 className={Styles.location_date}>
                                La Poste (secteur Grand-Annecy) - Août 2014 / Juillet 2016
                            </h4>
                            <ul className={Styles.tasks}>
                                <li>Accueil et conseil de la clientèle (80% de professionnels)</li>
                                <li>Organisation des animations clients / création de flyers</li>
                                <li>Gestion du back office (stocks, réclamations clients)</li>
                                <li>Participation aux challenges internes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.container2}>
                    <div className='languages'>
                        <h2 className={Styles.heading}>
                            Languages et technologies
                        </h2>
                        <ul className={Styles.infos}>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>Git/Github</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className={Styles.interests}>
                        <h2 className={Styles.heading}>
                            Centres d'intérêts
                        </h2>
                        <ul className={Styles.infos}>
                            <li>Jeux vidéos</li>
                            <li>Tir à l'arc</li>
                            <li>Culture coréenne</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
       
        <a href='#top'>
           <FontAwesomeIcon icon={faCircleUp} className={Styles.to_the_top}/>
        </a>
    </section>
  )
}
