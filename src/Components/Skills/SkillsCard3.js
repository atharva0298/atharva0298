import React from 'react'
import styles from '../../styles/Skills.module.css'

function SkillsCard() {
  return (
    <div className={styles['skillscard']}>
      <div className={styles['skillsbackground']}>
        <p>Email Writing</p>
      </div>
      <p className={styles['header']}>Writing effective cold emails</p>
    
      <hr></hr>
      <div className={styles['card-footer']}>
        <p>
          Radhika Apte
          </p>
        <p className={styles['date']}>September 25, 2015</p>
      </div>
    </div>
  )
}

export default SkillsCard