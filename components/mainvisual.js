import React, { useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Lottie from 'react-lottie';
import * as mvAnim from '../public/animation/data.json';
import gsap from 'gsap';

const Mainvisual = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(
            '.js-maincopy',
            {
                y: 50,
                opacity: 0,
                ease: 'Power1.ease',
            },
            1
        );
        tl.from(
            '.js-subcopy',
            {
                y: 50,
                opacity: 0,
                ease: 'Power1.ease',
            },
            1.2
        );
    });
    return (
        <div className={`${styles.mv} mv`} id="mv">
            <div className={styles.inner}>
                <div className={styles.mv__inner}>
                    <div className={styles.mv__catch}>
                        <h1 className={`${styles.mv__maincopy} js-maincopy`}>
                            Hello!
                            <br />
                            Everyday Creative
                        </h1>
                        <p className={`${styles.mv__subcopy} js-subcopy`}>Front-end development, flat illustration and motion design regardless of individuals or companies.</p>
                    </div>
                    <div className={styles.mv__anim}>
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
                <div className={styles.scrollDown}></div>
                <p className={styles.scrollTxt}>Scroll</p>
            </div>
        </div>
    );
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mvAnim,
};

export default Mainvisual;
