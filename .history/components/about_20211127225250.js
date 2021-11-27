// about page
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import AboutTtl from './about_ttl';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.minimals} id="minimals">
                <AboutTtl />
            </div>
        </div>
    );
};

export default About;
