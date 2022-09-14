import React from 'react'
import styles from '../../styles/Skills.module.css'

function SkillsCard() {
  return (
    <div className={styles['skillscard']}>
      <div className={styles['skillsbackground3']}>
        <p>Email Writing</p>
      </div>
      <p className={styles['header']}>Writing effective cold emails</p>
    
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