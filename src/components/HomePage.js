import React from 'react';

//Components
import Charts from './Charts';

//Bgc images
import coin from '../images/coin.png';
import bitcoin from '../images/bitcoin.png';

//Style
import style from './Homepage.module.css';

const HomePage = () => {
    return (
        <>
        <div className={style.container}>
            <div className={style.news}>
                <img src={coin} alt='coin' className={style.news_img}/>
                <div className={style.news_txt}>
                    <h2>Blockchainreporter Weekly News Review – Various Optimistic Crypto Developments</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Get more</button>
                </div>
            </div>
        </div>
        <div className={style.container2}>
            <div className={style.news}>
                <img src={bitcoin} alt='coin' className={style.news_img}/>
                <div className={style.news_txt}>
                    <h2>Bitcoin Reclaims $28K While Radix (XRD) Explodes 22% Daily (Market Watch)</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Get more</button>
                </div>
            </div>
        </div>
        <div className={style.container3}>
            <div className={style.chart}>
                <Charts />
            </div>
        </div>
        </>
    );
};

export default HomePage;