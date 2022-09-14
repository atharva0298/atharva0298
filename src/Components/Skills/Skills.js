import React from 'react'
import SkillsCard from '../Skills/SkillsCard'
import styles from '../../styles/Skills.module.css'
import SkillsCard2 from './SkillsCard2'
import SkillsCard3 from './SkillsCard3'
import SkillsCard4 from './SkillsCard4'

function Skills(props) {
  return (
    <div ref={props.skillsRef}>
      <div className={styles['skills']}>
        <h3>Popular Skills</h3>
      </div>
      <div className={styles['cards']}>
        <div>
          <SkillsCard />
          <SkillsCard2 />
        </div>
        <div>
          <SkillsCard3 />
          <SkillsCard4 />
        </div>
      </div>
    </div>
  )
}

export default Skills