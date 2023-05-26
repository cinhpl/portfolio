import React from 'react'
import { Link } from 'react-router-dom';
import Styles from '../assets/Styles/Footer.module.css';
import logo from '../logo.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
  return (
    <div className={Styles.Footer}>
    <Link to='/'>
        <img href='#' src={logo} alt='logo_footer' className={Styles.logo} />
    </Link>
      <p className={Styles.text}>© {(new Date().getFullYear())} cinhpl. All rights reserved</p>
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
  )
}
