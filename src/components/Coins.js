import React from 'react';

//Components
import Landing from './Landing';

//Styles
import style from './Coins.module.css';

const Coins = () => {
    return (
        <div className={style.coins}>
            <Landing />
        </div>
    );
};

export default Coins;