import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import Title from '../../components/title';

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <Title title="Contact" />
        </div>
    );
};
export default Contact;
