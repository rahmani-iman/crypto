import React from 'react';

//Bgc image
import coin from '../images/coin.png';

//Style
import style from './Homepage.module.css';

const HomePage = () => {
    return (
        <div className={style.container}>
            <div className={style.news}>
                <img src={coin} alt='coin' className={style.news_img}/>
                <div className={style.news_txt}>
                    <h2>Blockchainreporter Weekly News Review – Various Optimistic Crypto Developments</h2>
                    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;