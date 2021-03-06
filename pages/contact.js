import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Title from '../components/title';
import Header from '../components/header';
import Footer from '../components/footer';
import emailjs from 'emailjs-com';
import Head from 'next/head';

const Contact = ({ title = 'Hibimaru Portfolio', description = 'Hibimaruのポートフォリオサイトです。', ogImage = 'https://hibimaru.com/img/ogp_img.jpg' }) => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('hibimaru', 'hibimaru_email-js_temp', formRef.current, 'user_8wYgEnZgwA3tnxc0ximud').then(
            (result) => {
                console.log(result.text);
                setDone(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <>
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
            <Header />
            <section className={styles.contact}>
                <div className={styles.inner}>
                    <Title title={'Contact'} />
                    <p className={styles.contact__msg}>
                        このサイトに関するご意見やご感想、 その他お問い合わせなどはこちらからご入力ください。
                        <br />
                        まずはお気軽にご連絡ください。
                    </p>
                    <span className={styles.hr}></span>

                    <form ref={formRef} onSubmit={sendEmail} className={styles.c_form}>
                        <div className={styles.c_form__input}>
                            <input type="text" placeholder="Name" name="username" className={styles.c_form__border} />
                            <input type="email" placeholder="Email" name="user_email" className={styles.c_form__border} />
                        </div>
                        <textarea rows="5" type="text" placeholder="Message" name="message" className={styles.c_form__border} />
                        <button className={`${styles.more} ${styles._submit}`}>Submit</button>
                        <div className={styles.thanks__txt}>{done && 'お問い合わせありがとうございます！'}</div>
                    </form>
                </div>
            </section>
            <div className={styles.footer__img}></div>
            <Footer />
        </>
    );
};
export default Contact;
