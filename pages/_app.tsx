import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { Inter } from 'next/font/google';
import styles from '@/styles/App.module.css'
import NavBar from '@/components/NavBar';

import NextNProgress from 'nextjs-progressbar'

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <NavBar />
      <Container className={styles.pagesContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
