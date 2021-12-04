// pages/works/[id].js
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function WorksId({ works }) {
    return (
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
            <Footer />
        </main>
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
