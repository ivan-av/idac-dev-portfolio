import React from 'react'
import { useParams } from 'react-router-dom'
import SkillsCard from './SkillsCard'
import './style/skillsScreen.css'

const SkillsScreen = () => {

  return (
    <div className='skills'>
      <SkillsCard />
    </div>
  )
}

export default SkillsScreen