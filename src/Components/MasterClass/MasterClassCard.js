import React from 'react'
import styles from '../../styles/MasterClass.module.css'

function MasterClassCard() {
  return (
    <div className={styles['masterclasscard']}>
      <p>YouTube</p>
      <p>Scaling YouTube to 100k subscribers</p>
      {/* <p>Beauty of nature captured through my lens!</p> */}
      <div className={styles['card-footer']}>
        <p>
        Kushal Lodha
          </p>
        <p className={styles['date']}>September 25, 2015</p>
      </div>
    </div>
  )
}

export default MasterClassCard