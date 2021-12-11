// pages/works/[id].js
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Head from 'next/head';

export default function WorksId({ works }, { title = 'Hibimaru Portfolio', description = 'Hibimaruのポートフォリオサイトです。', ogImage = 'https://hibimaru.com/img/ogp_img.jpg' }) {
    return (
        <div className={styles.wrap}>
            <Head>
                <title>{title}</title>
                <meta property="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:site" content="@Hibimaru02" />
                <meta name="twitter:card" content="summary" />
                <meta property="og:url" content="https://hibimaru.com" />
            </Head>
            <main className={styles.main}>
                <Header />
                <div className={styles.inner}>
                    <article className={styles.article}>
                        <h1 className={styles.title}>{works.title}</h1>
                        <p className={styles.category}>{works.category && `${works.category.name}`}</p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${works.body}`,
                            }}
                            className={styles.post}
                        />
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'works' });

    const paths = data.contents.map((content) => `/works/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'works', contentId: id });

    return {
        props: {
            works: data,
        },
    };
};
