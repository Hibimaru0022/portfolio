import React from 'react';
import styles from '../styles/Home.module.scss';

const AboutTtl = () => {
    return (
        <div className={`${styles.section__ttl} ${styles._about}`}>
            <div className={styles.inner}>
                <h3 className={styles.about__read}>
                    About
                    <div className={`${styles.ttl__border} ${styles._about}`}></div>
                </h3>
            </div>
        </div>
    );
};

export default AboutTtl;
