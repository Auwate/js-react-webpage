import React, { useState } from 'react'
import styles from './Carousel.module.css';

const Carousel = ({countries}) => {

    const [current, setCurrent] = useState(0);

    const slideLeft = () => {
        current === 0 
        ? 
        setCurrent(prevCurrent => prevCurrent = countries.length-1) 
        : 
        setCurrent(prevCurrent => prevCurrent-1);
    }

    const slideRight = () => {

        current === countries.length-1 
        ? 
        setCurrent(prevCurrent => prevCurrent = 0) 
        : 
        setCurrent(prevCurrent => prevCurrent+1);

    }
    
    return (<>
        <div className={styles.carousel}>
            <div className={styles.carousel_container}>
                {countries.map((element, index) => (
                    <div className={index == current ? [styles.carousel_card, styles.carousel_card_active].join(' ') : styles.carousel_card} key={index}>
                        <img className={styles.card_image} src={element.content}></img>
                        <div className={styles.card_overlay}>
                            <h2 className={styles.card_title}>{element.title}</h2>
                        </div>
                    </div>
                ))}
                <div onClick={slideLeft} className={styles.carousel_left_arrow}>&lsaquo;</div>
                <div onClick={slideRight} className={styles.carousel_right_arrow}>&rsaquo;</div>
            </div>
        </div>
    </>)

}

export default Carousel;