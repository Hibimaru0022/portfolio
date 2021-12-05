import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Title from './title';

const TopContact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.inner}>
                <Title title={'Contact'} />
                <p className={styles.contact__msg}>
                    このサイトに関するご意見やご感想、 その他お問い合わせなど、 フォームより受け付けております。
                    <br />
                    なんでもお気軽にご連絡ください。
                </p>
                <button className={styles.more}>
                    <Link href="/contact">
                        <a>Send</a>
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default TopContact;
