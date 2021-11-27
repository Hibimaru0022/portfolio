import React from 'react';
import Link from 'next/dist/client/link';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/dist/client/image';
const Header = () => {
    return (
        <header className={styles.header} id="header">
            <div className={styles.inner}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src="./img/logo.svg" alt="Hibimaru" />
                    </div>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navmenu} ${styles.visible_wide}`}>
                            <li>
                                <Link href="./">Home</Link>
                            </li>
                            <li>
                                <Link href="./Works">Works</Link>
                            </li>
                            <li>
                                <Link href="./Illustration">Illustration</Link>
                            </li>
                            <li>
                                <Link href="./About">About</Link>
                            </li>
                        </ul>
                        <button className={`${styles.contact__btn} ${styles.visible_wide}`}>
                            <Link href="./Contact">Contact</Link>
                        </button>
                    </nav>
                    <nav className={`${styles.menu__nrw} ${styles.visible_nrw}`}>
                        <a href="#">
                            <img src="./img/ico_hamburger.svg" alt="menu" />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
