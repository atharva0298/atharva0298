import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer(props) {
  return (
    <div ref={props.footerRef} className={styles['footer']}>
      <h3 className={styles['contact']}>Contact us</h3>
      <p className={styles['email']}>Email : xyz@gmail.com</p>
      <p className={styles['whatsapp']}>WhatsApp : +91-0123456789</p>
    </div>
  )
}

export default Footer