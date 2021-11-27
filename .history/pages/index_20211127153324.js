// pages/index.js
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import { client } from '../libs/client';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';

export default function Home({ works }) {
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

export const getStaticPath = async () => {
    const key = {
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
    };
    const data = await fetch('https://hibimaru.microcms.io/api/v1/works', key)
        .then((res) => res.json())
        .catch(() => null);
    const dataid = data ? data.contents : null,
        paths = dataid ? dataid.map((content) => `/works/${works.id}`) : null;
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const data = await client.get({ endpoint: 'works' });

    return {
        props: {
            works: data.contents,
        },
    };
};
