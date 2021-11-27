import React from 'react';
import styles from '../styles/Home.module.scss';

const AboutTtl = () => {
    return (
        <div className={`${styles.section__ttl} ${styles._about}`}>
            About
            <div className={styles.ttl__border}></div>
        </div>
    );
};

export default AboutTtl;
