import React from 'react'
import styles from '../../styles/Skills.module.css'

function SkillsCard() {
  return (
    <div className={styles['skillscard']}>
      <div className={styles['skillsbackground2']}>
        <p>Excel</p>
      </div>
      <p className={styles['header']}>Advanced Excel Skills</p>
    
      <hr></hr>
      <div className={styles['card-footer']}>
        <p>
          Radhika Apte
          </p>
        <p className={styles['date']}></p>
      </div>
    </div>
  )
}

export default SkillsCard