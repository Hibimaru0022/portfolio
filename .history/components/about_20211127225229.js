// about page
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
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
    );
};

export default About;
