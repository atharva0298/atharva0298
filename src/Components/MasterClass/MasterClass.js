import React from 'react'
import styles from '../../styles/MasterClass.module.css'
import MasterClassCard from '../MasterClass/MasterClassCard'

function MasterClass(props) {
  const goToVideo  = () => {
    props.setIsVideoPage(true);
  }

  return (
    <div ref={props.masterRef}>
      <div className={styles['masterclass']}>
        <h3>Masterclass</h3>
      </div>
      <div onClick={() => goToVideo()} className={styles['cards']}>
        <MasterClassCard />
      </div>
    </div>
    
  )
}

export default MasterClass