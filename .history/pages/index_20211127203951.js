// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React from 'react';
import { client } from '../libs/client';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';
import WorksTtl from '../components/works-ttl';

export default function Home({ works, minimals }) {
    return (
        <div className={styles.wrap}>
            <Header />
            <MainVisual />
            <div className={styles.inner}>
                <div className={styles.works} id="works">
                    <WorksTtl />
                    <ul className={`${styles.works__list} ${styles.slider}`}>
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
                <div className={styles.minimals} id="minimals">
                    <WorksTtl />
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
                </div>
            </div>
        </div>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'works', queries: { limit: 4 } });

    return {
        props: {
            works: data.contents,
            limit: 4,
        },
    };
};
