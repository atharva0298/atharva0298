import React, { useState } from 'react'
import styles from '../styles/VideoPage.module.css'
function VideoPage() {
    const [embedLink, setEmbedLink] = useState('https://www.youtube.com/embed/k6tCH2vQybs');

    const handleClick = (param) => {
        setEmbedLink(param);
    }

   

  return (
    <div className={styles['videopage']}>
        <div className={styles['list']}>
        <ul>
                <li onClick={() => handleClick('https://www.youtube.com/embed/k6tCH2vQybs')}>
                    Topic 1
                </li >
                <li onClick={() => handleClick('https://www.youtube.com/embed/k6tCH2vQybs')}>
                    Topic 2
                </li>
                <li onClick={() => handleClick('https://www.youtube.com/embed/k6tCH2vQybs')}>
                    Topic 3
                </li>
              
            </ul>
        </div>
        <div className={styles['video-embed']}>
            <div>
                <iframe src={embedLink} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" height={400} width={800} />
            </div>
            <div>
                <p>description will go here </p>
            </div>

        </div>
    </div>
  )
}

export default VideoPage