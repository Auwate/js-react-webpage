import React, { useEffect } from 'react'
import styles from './Find.module.css'
import Carousel from '../carousel/Carousel';
import { halfCountries } from '../../images/locations';

const Find = () => {

    useEffect(() => {
        
        const windowSize = window.screen.width;
        const position = document.getElementById('divHide').offsetHeight;
        
        const event = () => {

            if (window.scrollY-(windowSize/4) >= position) {
                document.getElementById('divHide').className = [styles.h1_heading, styles.h1_heading_scrolled].join(' ');
                window.removeEventListener('scroll', event);
            }
            console.log(window.scrollY);
            setTimeout(() => {}, 333);

            return () => {}

        }

        window.addEventListener('scroll', event);

    }, [])

    return (
        <>
            <div className={styles.find_container}>
                <div className={styles.heading_container}>
                    <h1 id='divHide' className={styles.h1_heading}>Find your adventure</h1>
                    <div className={styles.subtext_container}>
                        <span className={styles.span_subheading}>Explore what the world's most expansive vacation hub has to offer </span>
                    </div>
                </div>
            </div>
            <div className={styles.carousel}>
                <Carousel countries={halfCountries}/>
            </div>
        </>
    )

}

export default Find;