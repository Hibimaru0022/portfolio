// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { state, useState, useEffect } from 'react';
import { client } from '../libs/client';
import Head from 'next/head';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';
import About from '../components/about';
import Title from '../components/title';
import TopContact from '../components/top_contact';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Home({ works }, { title = 'Hibimaru Portfolio', description = 'これはHibimaruのポートフォリオサイトです。', ogImage = 'https://hibimaru.com/img/ogp_img.jpg' }) {
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
            <div className={styles.wrap}>
                <div className={styles.l_kv}>
                    <Header />
                    <MainVisual />
                </div>
                <div className={styles.inner}>
                    <section className={styles.works} id="works">
                        <Title title={'Works'} />
                        <Swiper
                            breakpoints={{
                                // when window width is >= 640px
                                768: {
                                    // width: 764,
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={2}
                            spaceBetween={30}
                            // loop={true}
                            Autoplay={true}
                            scrollbar={{ draggable: true }}
                        >
                            <ul className={`${styles.works__list} ${styles.slider}`}>
                                {works.map((works) => (
                                    <SwiperSlide key={works.id} className={`${styles.works__col}`}>
                                        <Link href={`/works/${works.id}`}>
                                            <a>
                                                <figure className={styles.works__col__thumbnail}>
                                                    <img src={works.img.url} alt={works.title} />
                                                </figure>
                                                <div className={styles.works__col__info}>
                                                    <h4 className={styles.works__col__ttl}>{works.title}</h4>
                                                </div>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </ul>
                        </Swiper>
                        <div className="button_prev"></div>
                        <div className="button_next"></div>

                        <button className={styles.more}>
                            <Link href="/works_list">
                                <a>More</a>
                            </Link>
                        </button>
                    </section>
                    {/* <section className={styles.minimals} id="minimals">
                    <Title title={'Minimals'} />
                    <ul className={`${styles.minimals__list} ${styles.slider}`}>
                        {minimals.map((minimals) => (
                            <li key={minimals.id} className={styles.minimals__col}>
                                <Link href={`/minimals${minimals.id}`}>
                                    <a>
                                        <figure className={styles.minimals__col__thumbnail}>
                                            <img src={minimals.img.url} alt={minimals.title} />
                                        </figure>
                                        <div className={styles.minimals__col__info}>
                                            <h4 className={styles.minimals__col__ttl}>{minimals.title}</h4>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className={styles.more}>
                        <Link href="/minimals_list">
                            <a>More</a>
                        </Link>
                    </button>
                </section> */}
                </div>
                <About />
                <TopContact />
                <div className={styles.footer__img}></div>
                <Footer />
            </div>
        </>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const worksData = await client.get({ endpoint: 'works', queries: { limit: 8 } });
    // const minimalsData = await client.get({ endpoint: 'minimals', queries: { limit: 5 } });

    return {
        props: {
            works: worksData.contents,
            // minimals: minimalsData.contents,
        },
    };
};
