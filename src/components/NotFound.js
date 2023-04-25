import React from 'react';

//Icon
import icon from '../images/notfound.png';

//Style
import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={style.container}>
            <img src={icon} alt="NotFound" />
            <h2>Sorry, The page NotFound</h2>
        </div>
    );
};

export default NotFound;