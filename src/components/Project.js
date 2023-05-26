import React from 'react';
import Styles from '../assets/Styles/Project.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Project ({ name, images, link, description, functions, techno }) {
    const functionList = functions ? functions.split(',').map((func) => func.trim()) : [];
  return (
    <div className={Styles.card}>
        <div className={Styles.content}>
            <h3 className={Styles.title}>{name}</h3>
            <p className={Styles.description}>{description}</p>
            <h4 className={Styles.functions_title}>Fonctionnalités</h4>
            <ul className={Styles.functions_list}>
                {functionList.map((func, index) => (
                    <li key={index} className={Styles.functions}>{func}</li>
                ))}
            </ul>
            <p className={Styles.techno}>{techno}</p>
            <span className={Styles.links}>
              <Link to={link}>
                <FontAwesomeIcon target='_blank' icon={faLink} className={Styles.icon}></FontAwesomeIcon>
              </Link>
              <Link to={link}>
                  <img src={images} alt={name} className={Styles.images} />
              </Link>
            </span>
        </div>
    </div>
  )
}
