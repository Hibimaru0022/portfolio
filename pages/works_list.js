// works list page
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { client } from '../libs/client';
import Title from '../components/title';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function WorksList({ works }, { title = 'Hibimaru Portfolio', description = 'これはHibimaruのポートフォリオサイトです。', ogImage = 'https://hibimaru.com/img/ogp_img.jpg' }) {
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
                <Header />
                <div className={styles.inner}>
                    <div className={styles.works} id="works">
                        <Title title={'Works'} />
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
                <Footer />
            </div>
        </>
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
