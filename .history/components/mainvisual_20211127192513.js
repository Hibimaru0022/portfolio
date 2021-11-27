import React from 'react';
import styles from '../styles/Home.module.scss';
import Lottie from 'react-lottie';
import * as mvAnim from '../public/animation/data.json';

const Mainvisual = () => {
    return (
        <div className={styles.mv} id="mv">
            <div className={styles.inner}>
                <div className={styles.mv__inner}>
                    <div className={styles.mv__catch}>
                        <h1 className={styles.mv__maincopy}>
                            Hello!
                            <br />
                            Everyday Creative
                        </h1>
                        <p className={styles.mv__subcopy}>Front-end development, flat illustration and motion design regardless of individuals or companies.</p>
                    </div>
                    <div className={styles.mv__anim}>
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mvAnim,
    rendererSettings: {
        preserveAspectRatio: 'xMidYmid',
    },
};

export default Mainvisual;
