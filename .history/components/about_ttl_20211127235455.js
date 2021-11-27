import React from 'react';
import styles from '../styles/Home.module.scss';

const AboutTtl = () => {
    return (
        <h3 className={`${styles.section__ttl} ${styles._about}`}>
            About Me
            <div className={`${styles.ttl__border} ${styles._about}`}></div>
        </h3>
    );
};

export default AboutTtl;
