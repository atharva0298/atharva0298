import React from 'react'
import styles from '../styles/Header.module.css';
import backdropheader from '../../src/Components/images/backdrop.JPG'
import round from '../Components/images/roundlogo.jpg'
import youth from '../Components/images/youthwinglogo.jpg'
import coe from './images/coelogo.jpg'

function Header(props) {
  const handleExplore = () => {
    props.setIsVideoPage(false);
    props.handleClick('master');
  }
  return (
    <div ref={props.headerRef} className={styles['header-with-image']}>
      {/* <img src={backdropheader} alt='backdrop' /> */}
      <div className={styles['header-main']}>
        <img className={styles['jito-round']} src={round} alt='jito-round' />
        <div className={styles['header']}>
          <p onClick={() => props.handleClick('home')}>Home</p>
          <p onClick={() => props.handleClick('master')}>Masterclass</p>
          <p onClick={() => props.handleClick('skills')}>Skill</p>
          <p onClick={() => props.handleClick('contact')}>Contact</p>
        </div>
        <img className={styles['jito-youth']} src={coe} alt='jito-youth' />
      </div>

      <div className={styles['jito-coe']}>
        <img src={youth} alt='jito-coe'/>
      </div>

      <p className={styles['kaushal']}>Kaushal</p>

      {
        props.isVideoPage ? 
        null
        :
        <div className={[styles['explore']]}>
        <p>JITO se skill seekho!</p>
        <p>Peer to Peer skill share platform by JYW National Youth Academy</p>
        <button onClick={handleExplore}>Explore</button>
    </div>
      }
     
    </div>
  )
}

export default Header