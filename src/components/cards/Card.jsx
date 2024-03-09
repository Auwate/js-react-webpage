import React from 'react'
import styles from './Card.module.css';

const Card = (props) => {

    return (
        <> 
            <div className={styles.card}>
                <div className={styles.card_container}>
                    <img src={props.image}></img>
                    <div className={styles.overlay}>
                        <h2 className={styles.overlay_text}>{props.type}</h2>
                    </div>
                    <h1>{props.description}</h1>
                </div>
            </div>
        </>
    )

}

export default Card;