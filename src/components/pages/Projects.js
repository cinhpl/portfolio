import React from 'react'
import Styles from '../../assets/Styles/Projects.module.css';
import projects from '../../assets/projects';
import Project from '../Project';

export default function Projects () {
  return (
    <section className='project'>
        <h1 className={Styles.title}>Mes projets</h1>
        <div className={Styles.container}>
        {projects.map((project, index) =>
          <Project 
            key={index}
            name={project.name}
            link={project.link}
            description={project.description}
            functions={project.functions}
            techno={project.techno}
            images={project.images}
          />
        )}
      </div>
    </section>
  )
}
