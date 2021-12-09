import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/dist/client/link';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Home from '../pages';

const Header = () => {
    const [open, setIsOpen] = useState(false);
    const menu = () => {
        setIsOpen(!open);
    };

    return (
        <header className={styles.header} id="header">
            <div className={styles.navigation}>
                <h1 className={open ? styles.close : styles.logo}>
                    <Link href="/">
                        <a>
                            <Image src="/img/logo.svg" alt="Hibimaru" width={182} height={34} />
                        </a>
                    </Link>
                </h1>
                <nav className={styles.nav}>
                    <ul className={`${styles.navmenu} ${styles.visible_wide}`}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/works_list">
                                <a>Works</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                    <button className={`${styles.contact__btn} ${styles.visible_wide}`}>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </button>
                </nav>
                <nav className={`${styles.menu__nrw} ${styles.visible_nrw}`}>
                    {/* <Image className={open ? undefined : styles.menu__logo} src="/img/logo.svg" alt="Hibimaru" width={120} height={30} /> */}
                    <div className={styles.menu__icon} onClick={() => menu()}>
                        <span className={open ? styles.open_bar : styles.menu__btn}></span>
                        <span className={open ? styles.open_bar : styles.menu__btn}></span>
                    </div>
                    <div className={open ? styles.menu__box : styles.close}>
                        <h1 className={styles.menu__logo}>
                            <Image src="/img/ph_menu_logo.svg" alt="Hibimaru" width={120} height={36} />
                        </h1>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__list__col}>
                                <Link href="./">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className={styles.menu__list__col}>
                                <Link href="/works_list">
                                    <a>Works</a>
                                </Link>
                            </li>
                            <li className={styles.menu__list__col}>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className={styles.menu__list__col}>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
