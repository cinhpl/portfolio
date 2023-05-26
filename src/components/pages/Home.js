import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import Styles from '../../assets/Styles/Home.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export default function Home () {
  return (
    <div className={Styles.Home}>
        <div className={Styles.container}>
          <h1 className={Styles.title}>
            Bienvenue sur mon portfolio !
          </h1>
          <p className={Styles.content}>
            Je suis Cindy et je suis actuellement à la recherche d'une alternance pour une formation de <strong>Développeur web - conception mobile</strong> d'une durée de 12 mois. <br/>
            <br />
            J'ai récemment suivi une formation qui ma conforté dans mon choix de changer de métier et je suis prête à mettre en oeuvre mes compétences pour continuer 
            à apprendre et à évoluer dans ce domaine.
          </p>
          <p className={Styles.links}>Vous pouvez retrouver mon parcours 
            <Link to='/curriculum'> ici</Link> et mes projets finis ou en cours <Link to='/projects'>ici</Link>.
          </p>
          <div className={Styles.contacts}>
            <Link to='https://gitvio.vercel.app/@cinhpl'>
              <img src={github} alt="github" className={Styles.contact_icon}/>
            </Link>
            <Link to='https://www.linkedin.com/in/cindyhoupline18/'>
                <img src={linkedin} alt="linkedin" className={Styles.contact_icon} />
            </Link>
            <a href="mailto:cindy.houpline@proton.me"><FontAwesomeIcon icon={faEnvelope} className={Styles.contact_icon}/></a>
          </div>
        </div>
    </div>
  )
}