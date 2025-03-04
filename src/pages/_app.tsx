import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/grid.css';
import { appWithTranslation } from 'next-i18next';

import '@/theme/_global.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap', // fallback
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(App);
