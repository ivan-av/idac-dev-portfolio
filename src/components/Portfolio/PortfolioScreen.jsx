import PortfolioCard from './PortfolioCard'
import React from 'react'
import './style/portfolio.css'

const PortfolioScreen = () => {

  return (
    <div className='portfolio'>
      <h2 className='portfolio__title'>Portafolio</h2>
      <div className='portfolio__container'>
            <PortfolioCard />
      </div>
    </div>
  )
}

export default PortfolioScreen