import React from 'react';

//Styles
import style from './Exchange.module.css';

const Exchange = () => {
    return (
        <div>
            <div className={style.origin}>
                <input type="text"/>
                <select>
                    <option value="btc">BTC</option>
                    <option value="aud">AUD</option>
                </select>
            </div>
            <div className={style.dest}>
                <input type="text"/>
                <select>
                    <option value="btc">BTC</option>
                    <option value="aud">AUD</option>
                </select>
            </div>
        </div>
    );
};

export default Exchange;