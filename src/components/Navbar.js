import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from './Navbar.module.css';
import logo from '../images/coin_icon.png';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="icon"/>
                <h1>coin market</h1>
            </div>
            <div className={styles.link}>
                <Link to="/home">Home</Link>
                <Link to="/coins">Coins</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    );
};

export default Navbar;