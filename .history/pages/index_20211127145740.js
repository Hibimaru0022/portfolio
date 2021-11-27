// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import { client } from '../libs/client';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { ArrowRight } from '../public/img/ico_arrow_right.svg';
import { ArrowLeft } from '../public/img/ico_arrow_left.svg';

export default function Home({ works }) {
    const [current, setCurrent] = useState(0);
    const length = works.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    console.log(current);

    if (!Array.isArray(works) || works.length <= 0) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <Header />
            <MainVisual />
            <div className={styles.inner}>
                <ul className={`${styles.works} ${styles.slider}`}>
                    <ArrowLeft className={styles.left__arrow} />
                    <ArrowRight className={styles.right__arrow} />
                    {works.map((works, index) => (
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
