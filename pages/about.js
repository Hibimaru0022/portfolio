// about page
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AboutTtl from '../components/about_ttl';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';

const About = ({ title = 'Hibimaru Portfolio', description = 'Hibimaruのポートフォリオサイトです。', ogImage = 'https://hibimaru.com/img/ogp_img.jpg' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header />
            <svg className={styles.waves__prof} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={styles.parallax}>
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(46,221,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="2" fill="rgba(248,251,255,1)" />
                </g>
            </svg>
            <section className={`${styles.about} ${styles._prof}`} id="about">
                <div className={styles.about__inner}>
                    <div className={styles.about__info}>
                        <div className={styles.about__ph}>
                            <Image src="/img/ph_my-icon.svg" width={250} height={180} alt="Hibimaru" />
                        </div>
                        <div className={styles.about__read}>
                            <AboutTtl title={'About Me'} />
                            <p className={`${styles.about__txt} ${styles.visible_wide}`}>
                                <strong>庄野 響</strong>
                                <br />
                                1998年、徳島県の右下に生まれました。商業高校を卒業後、神戸の専門学校でデザインを学び、印刷会社やゲーム会社でデザイナーを経験しました。
                                <br />
                                現在は、主にWebフロントエンドの実装と、線画が特徴のベクターイラストレーションアニメーションを制作しています。
                                <br />
                                私は小さい頃から物を作るのが大好きでした。同じものづくりが好きなクリエイターさんのWebサイト制作などのお手伝いもできると嬉しいです。コラボレーションもお待ちしてます！
                            </p>
                            <ul className={styles.about__skill}>
                                <li className={styles.visible_wide}>
                                    <Image src="/img/ico_development.svg" width={82} height={82} alt="Development" />
                                </li>
                                <li className={styles.visible_wide}>
                                    <Image src="/img/ico_illustration.svg" width={82} height={82} alt="Illustration" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className={`${styles.about__txt} ${styles.visible_nrw}`}>
                        <strong>庄野 響</strong>
                        <br />
                        1998年、徳島県の右下に生まれました。商業高校を卒業後、神戸の専門学校でデザインを学び、印刷会社やゲーム会社でデザイナーを経験しました。
                        <br />
                        現在は、主にWebフロントエンドの実装と、線画が特徴のベクターイラストレーションアニメーションを制作しています。
                        <br />
                        私は小さい頃から物を作るのが大好きでした。同じものづくりが好きなクリエイターさんのWebサイト制作などのお手伝いもできると嬉しいです。コラボレーションもお待ちしてます！
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
            <Footer />
        </>
    );
};

export default About;
