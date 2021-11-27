// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { state, useState } from 'react';
import { client } from '../libs/client';
import MinimalsTtl from '../components/minimals_ttl';

export default function MinimalsList({ works, minimals }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.inner}>
                <div className={styles.minimals} id="minimals">
                    <MinimalsTtl />
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
    const minimalsData = await client.get({ endpoint: 'minimals' });

    return {
        props: {
            minimals: minimalsData.contents,
        },
    };
};
