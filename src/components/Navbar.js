import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from './Navbar.module.css';
import logo from '../images/coin_icon.png';

//Images
import hamburgerMenu from './hamburgerMenu.svg';
import multiply from './multiply.svg';

const Navbar = () => {
    
    const [sideBar, setSideBar] = useState(false);

    const clickHandler = () => {
        setSideBar(!sideBar);
    }

    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="icon"/>
                    <h1>coin market</h1>
                </div>
                <div className={`${styles.link} ${styles.hidden}`}>
                    <Link to="/home">Home</Link>
                    <Link to="/coins">Coins</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div className={`${styles.burger_icon} ${styles.active}`}>
                    {sideBar ? (
                        <img src={multiply} alt="Multiply_icon" onClick={clickHandler}/>
                        ) : (
                        <img src={hamburgerMenu} alt="Burger_icon" onClick={clickHandler}/>
                    )}
                </div>
            </div>
            <div>
                <div className={`${styles.sidebar} ${sideBar ? `${styles.smooth}` : `${styles.hidden}`}`}>
                    <Link to="/home">Home</Link>
                    <Link to="/coins">Coins</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;