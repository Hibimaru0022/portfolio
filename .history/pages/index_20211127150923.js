// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import { client } from '../libs/client';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { arrowRight } from '../public/img/ico_arrow_right.svg';
import { arrowLeft } from '../public/img/ico_arrow_left.svg';

export default function Home({ works, index }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    return (
        <div className={styles.wrap}>
            <Header />
            <MainVisual />
            <div className={styles.inner}>
                <ul className={`${styles.works} ${styles.slider}`}>
                    {works.map((works) => (
                        <li key={works.id} className={styles.works__col}>
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'works' });

    return {
        props: {
            works: data.contents,
        },
    };
};
