import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MasterClass from './Components/MasterClass/MasterClass';
import Skills from './Components/Skills/Skills';
import { React, useRef, useState } from 'react';
import VideoPage from './Components/VideoPage';

function App() {
  const headerRef = useRef(null);
  const masterRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);
  const [isVideoPage, setIsVideoPage] = useState(false);

  const handleClick = (param) => {
    setIsVideoPage(false);
    if (param === 'home') {
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (param === 'contact') {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (param === 'skills') {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (param === 'master') {
      masterRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className='app'>
      <Header  isVideoPage={isVideoPage} headerRef={headerRef} handleClick={handleClick} setIsVideoPage={setIsVideoPage} />
      {
        isVideoPage ?
          <VideoPage />
          :
          <>
            <MasterClass masterRef={masterRef} isVideoPage={isVideoPage} setIsVideoPage={setIsVideoPage} />
            <Skills skillsRef={skillsRef} />
          </>

      }

      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
