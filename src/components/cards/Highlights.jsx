import React from 'react'
import styles from './Highlights.module.css';
import Card from './Card.jsx';
import { waterfall, camels, rock } from '../../images/locations';

const Highlights = () => {

    return (
        <>
            <div className={styles.highlights}>
                <div className={styles.highlights_container}>
                    <div className={styles.upper_level}>
                        <Card className={styles.card} image={camels} type={`Adrenaline`} description={`Cross the Arabian desert with expert guides.`}/>
                        <Card className={styles.card} image={waterfall} type={`Adventure`} description={`Visit the famous Amazon waterfalls in Brazil.`}/>
                    </div>
                    <div className={styles.lower_level}>
                        <Card className={styles.card} image={rock} type={`Sightseeing`} description={`Visit the lonely rock while crusing in the Caribbean.`} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Highlights;