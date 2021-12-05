// about page
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import AboutTtl from './about_ttl';
import Image from 'next/image';

const About = () => {
    return (
        <div>
            <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={styles.parallax}>
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(46,221,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="2" fill="rgba(248,251,255,1)" />
                </g>
            </svg>
            <section className={styles.about} id="about">
                <div className={styles.about__inner}>
                    <div className={styles.about__info}>
                        <div className={styles.about__ph}>
                            <Image src="/img/ph_my-icon.svg" width={250} height={180} alt="Hibimaru" />
                        </div>
                        <div className={styles.about__read}>
                            <AboutTtl title={'About Me'} className="scroll" />
                            <p className={`${styles.about__txt} ${styles.visible_wide}`}>
                                <strong>Hi! My name is Hibiki Shono.</strong>
                                <br />
                                Front-end development, flat illustration and motion design regardless of individuals or companies.Front-end development, flat illustration and motion design regardless
                                of individuals or companies.
                            </p>
                            <ul className={styles.about__skill}>
                                <li className={styles.visible_wide}>
                                    <Image src="/img/ico_development.svg" width={82} height={82} alt="Development" />
                                </li>
                                <li className={styles.visible_wide}>
                                    <Image src="/img/ico_illustration.svg" width={82} height={82} alt="Illustration" />
                                </li>
                            </ul>
                            <button className={`${styles.more} ${styles._about_wide}`}>
                                <Link href="/about">
                                    <a>More</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <p className={`${styles.about__txt} ${styles.visible_nrw}`}>
                        Hi! My name is Hibiki Shono.
                        <br />
                        Front-end development, flat illustration and motion design regardless of individuals or companies.Front-end development, flat illustration and motion design regardless of
                        individuals or companies.
                    </p>
                    <ul className={`${styles.about__skill} ${styles.visible_nrw_skill}`}>
                        <li>
                            <Image src="/img/ico_development.svg" width={82} height={82} alt="Development" />
                        </li>
                        <li>
                            <Image src="/img/ico_illustration.svg" width={82} height={82} alt="Illustration" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;
