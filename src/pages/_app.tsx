import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter', // This is the key change
});

export type TPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type TAppPropsWithLayout = AppProps & {
  Component: TPageWithLayout;
};

function App({ Component, pageProps }: TAppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
        <title>Facebook</title>
        <meta
          name="description"
          content="A clone of Facebook built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}

export default appWithTranslation(App);
