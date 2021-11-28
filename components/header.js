import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/dist/client/link';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const Header = () => {
    const [open, setIsOpen] = useState(false);
    const menu = () => {
        setIsOpen(!open);
    };

    return (
        <header className={styles.header} id="header">
            <div className={styles.inner}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <Image src="/img/logo.svg" alt="Hibimaru" width={190} height={36} />
                    </div>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navmenu} ${styles.visible_wide}`}>
                            <li>
                                <Link href="./">Home</Link>
                            </li>
                            <li>
                                <Link href="./">Works</Link>
                            </li>
                            <li>
                                <Link href="./">Illustration</Link>
                            </li>
                            <li>
                                <Link href="./">About</Link>
                            </li>
                        </ul>
                        <button className={`${styles.contact__btn} ${styles.visible_wide}`}>
                            <Link href="./">Contact</Link>
                        </button>
                    </nav>
                    <nav className={`${styles.menu__nrw} ${styles.visible_nrw}`} onClick={() => menu()}>
                        <a href="#">
                            <Image src="/img/ico_hamburger.svg" alt="menu" width={30} height={30} />
                        </a>
                        <ul className={open ? styles.menu__nrw : undefined}>
                            <li>
                                <Link href="./">Home</Link>
                            </li>
                            <li>
                                <Link href="./">Works</Link>
                            </li>
                            <li>
                                <Link href="./">Illustration</Link>
                            </li>
                            <li>
                                <Link href="./">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
