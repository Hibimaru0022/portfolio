import React from 'react';
import styles from '../styles/Home.module.scss';

const Title = (props) => {
    return (
        <div className={styles.section__ttl}>
            {props.title}
            <div className={styles.ttl__border}></div>
        </div>
    );
};

export default Title;
