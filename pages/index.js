// pages/index.js
import Link from 'next/link';
import { client } from '../libs/client';

export default function Home({ works }) {
    return (
        <div>
            <ul>
                {works.map((works) => (
                    <li key={works.id}>
                        <Link href={`/works/${works.id}`}>
                            <a>{works.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
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
