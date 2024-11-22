import React from 'react'
import styles from "./Video.module.css"
import videoFile from "../../assets/videos/FranklinYu.mp4"
import useParallax from '../../hooks/parallaxHook'

const Video = () => {
    return (
        <div className={styles.videoContainer}
        style={{
            textAlign: 'center',
            transform: `translateY(${useParallax(0.3,0.3,0.3)}px)`,
            }}
        >
            <video className={`${styles.video}`} autoPlay muted loop>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video