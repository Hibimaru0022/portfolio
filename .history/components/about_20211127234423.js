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
                        <Image src="/img/ph_my-icon.svg" width={286} height={auto} />
                        {/* <img src="./img/ph_my-icon.svg" /> */}
                    </div>
                    <div className={styles.about__read}>
                        <AboutTtl />
                        <p className={styles.about__txt}>
                            Hi! My name is Hibiki Shono.
                            <br />
                            Front-end development, flat illustration and motion design regardless of individuals or companies.Front-end development, flat illustration and motion design regardless of
                            individuals or companies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;