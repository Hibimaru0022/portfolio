import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__img}></div>

            <div className={styles.footer__bg}>
                <Image src="/img/ph_menu_logo.svg" alt="Hibimaru" width={128} height={24} className={styles.footer__logo} />
                <p className={styles.footer__copyright}>Copyright © 2021 Hibimaru.All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
