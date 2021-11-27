// works list page
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { state, useState } from 'react';
import { client } from '../libs/client';

export default function Home({ works }) {
    return (
        <div className={styles.wrap}>
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
                </div>
            </div>
        </div>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const worksData = await client.get({ endpoint: 'works' });

    return {
        props: {
            works: worksData.contents,
        },
    };
};
