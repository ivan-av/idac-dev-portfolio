import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroPhoto from '../../assets/img/png/hero.jpg'

const HomeCard = () => {

  return (
    <article className='home-card'>
      <header className='home-card__header'>
        <h1>Hola soy Iván Daniel Avila Campos</h1>
        <img src={heroPhoto} alt="profile photo" className='home-header__hero-photo' />
        <h3>Desarrollador web / Biólogo</h3>
      </header>
      <div className='home-card__body'>
        <h2 className='home-card__title'>Descripción</h2>
        <p>Soy una persona proactiva a la que le encanta aprender nuevas tecnologías y tratar de entender cómo funcionan las cosas. Estar involucrado en el área de TI me ha dado la oportunidad de conectar con la gente y desafiarme a mí mismo buscando proporcionar servicios y soluciones</p>
        <br />
        <p>Estoy interesado en el desarrollo de servicios web con React, así como implementar y aprender nuevas tecnologías relacionadas con servicios de la nube</p>
      </div>
      <div>
        <button>
          <a href="https://drive.google.com/file/d/1jxeXmEO4f3CE-Ieaz9Y2aL82TVZnCDLT/view?usp=sharing" className="redes__links" target={'__blank'}>
            <i className="fa-solid fa-file-lines"></i> Descargar CV
          </a>
        </button>
      </div>
    </article>
  )
}

export default HomeCard