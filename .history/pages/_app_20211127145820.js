import '../styles/globals.css';
import '../styles/Home.module.scss';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import { client } from '../libs/client';
import Header from '../components/header';
import MainVisual from '../components/mainvisual';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { ArrowRight } from '../public/img/ico_arrow_right.svg';
import { ArrowLeft } from '../public/img/ico_arrow_left.svg';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
