// about page
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import AboutTtl from './about_ttl';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about} id="about">
                <div className={styles.about__info}>
                    <div className={styles.about__ph}>
                        <img src="./img/ph_my-icon.svg" />
                    </div>
                    <AboutTtl />
                </div>
            </div>
        </div>
    );
};

export default About;
