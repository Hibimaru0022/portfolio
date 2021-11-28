// about page
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import AboutTtl from './about_ttl';
import Image from 'next/image';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.about__inner}>
                <div className={styles.about__info}>
                    <div className={styles.about__ph}>
                        <Image src="/img/ph_my-icon.svg" width={280} height={200} alt="Hibimaru" />
                    </div>
                    <div className={styles.about__read}>
                        <AboutTtl title={'About Me'} />
                        <p className={`${styles.about__txt} ${styles.visible_wide}`}>
                            <strong>Hi! My name is Hibiki Shono.</strong>
                            <br />
                            Front-end development, flat illustration and motion design regardless of individuals or companies.Front-end development, flat illustration and motion design regardless of
                            individuals or companies.
                        </p>
                        <ul className={`${styles.about__skill} ${styles.visible_wide}`}>
                            <li>
                                <Image src="/img/ico_development.svg" width={82} height={82} alt="Development" />
                            </li>
                            <li>
                                <Image src="/img/ico_illustration.svg" width={82} height={82} alt="Illustration" />
                            </li>
                        </ul>
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
    );
};

export default About;
