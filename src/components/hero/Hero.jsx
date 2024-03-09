import React from 'react'
import styles from './Hero.module.css';
import {AiOutlineSearch} from 'react-icons/ai';
import video from '../../videos/video-3.mp4';

const Hero = () => {
  return (
    <div className={styles.hero_container}>
        <form className={styles.text_container}>
            <div className={styles.text}>
                <label>
                    Where
                </label>
                <input className={styles.inputText} type='text' placeholder='Search flights'/>
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>
                    From
                </label>
                <input type='date' />
            </div>
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>
                    Until
                </label>
                <input type='date' />            </div>
            <div className={styles.search_btn}>
                <AiOutlineSearch className={styles.search_icon}/>
                <button className={styles.btn}>Search for flights</button>
            </div>
        </form>
        <div className={styles.video_container}>
            <video 
            src={video} 
            className={styles.background} 
            autoPlay muted loop>
            </video>
        </div>
    </div>
  )
}

export default Hero