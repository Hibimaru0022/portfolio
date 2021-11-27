import '../styles/globals.css';
import '../styles/Home.module.scss';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
// import { client } from '../libs/client';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
