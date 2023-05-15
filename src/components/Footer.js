import React from 'react';

//Style
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className={style.top_container}>
                <div className={style.about}>
                    <h2>About</h2>
                    <a href='#'>About</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Company news</a>
                </div>
                <div className={style.stayupdated}>
                    <h2>Stay Updated</h2>
                    <a href='#'>Consensus</a>
                    <a href='#'>Newsletters</a>
                    <a href='#'>Follow</a>
                </div>
                <div className={style.getintouch}>
                <h2>Get In Touch</h2>
                    <a href='#'>Contact Us</a>
                    <a href='#'>Advertise</a>
                    <a href='#'>Sitemap </a>
                </div>
            </div>
            <div className={style.bottom_container}>
                <p>Please note that our privacy policy, terms of use, cookies, and do not sell my personal information has been updated.</p>
                <p>The leader in news and information on cryptocurrency, digital assets and the future of money, CoinDesk is a media outlet that strives for the highest journalistic standards and abides by a strict set of editorial policies. CoinDesk is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups. As part of their compensation, certain CoinDesk employees, including editorial employees, may receive exposure to DCG equity in the form of stock appreciation rights, which vest over a multi-year period. CoinDesk journalists are not allowed to purchase stock outright in DCG.</p>
            </div>
        </div>
    );
};

export default Footer;