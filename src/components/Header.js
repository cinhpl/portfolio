import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../assets/Styles/Header.module.css';
import logo from '../logo.png';

export default function Header () {
  return (
    <div className={Styles.Header}>
    <Link to='/'>
        <img href='#' src={logo} alt='logo_header' className={Styles.logo}/>
    </Link>
        <ul className={Styles.header_ul}>
            <li>
                <Link to='/'>Accueil</Link>
            </li>
            <li>        
                <Link to='/curriculum'>Parcours</Link>
            </li>
            <li>
                <Link to='/projects'>Projets</Link>
            </li>
        </ul>
    </div>
  )
}
