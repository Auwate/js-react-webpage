import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } 
from 'react-icons/ai';
import { LiaReact } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = [
        {
            id: 'learn-more',
            value: 'Learn More'
        },
        {
            id: 'log-in',
            value: 'Log In'
        },
        {
            id: 'sign-up',
            value: 'Sign Up'
        }
    ];

    const icons = [
        {
            id: 'search',
            value: <AiOutlineSearch/>
        },
        {
            id: 'user',
            value: <AiOutlineUser/>
        }
    ];

    const [nav, setNav] = useState(false);

    const handleNavClick = () => {
        setNav(prevNav => !prevNav);
    }

    return (<>
                <header>
                    <nav className={styles.headerContainer}>
                        <div className={styles.iconContainer}>
                                <h1><Link to={`/`} className={styles.referenceLinks}><LiaReact/></Link></h1>
                        </div>
                        <div>
                            <ul className={nav ? [styles.links, styles.active].join(' ') : [styles.links]}>
                                {links.map(({id, value}, index) => (
                                    <li 
                                    key={index}>
                                        <Link to={`/${id}`} className={styles.referenceLinks}>{value}</Link>
                                    </li>
                                ))}
                                {icons.map(({id, value}, index) => (
                                    <li 
                                    key={index}
                                    className={styles.icons}>
                                        <Link to={`/${id}`} className={styles.referenceLinks}>{value}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div onClick={handleNavClick} className={styles.mobile_btn}>
                            {nav ? <AiOutlineClose style={{color: 'white'}}/> : <AiOutlineMenu/>}
                        </div>
                    </nav>
                </header>
        </>)

}

export default Navbar