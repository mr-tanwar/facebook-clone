import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';

import { appWithTranslation } from 'next-i18next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap', // fallback
});

export type TPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type TAppPropsWithLayout = AppProps & {
  Component: TPageWithLayout;
};
function App({ Component, pageProps }: TAppPropsWithLayout) {
  // checks if the page has a getLayout function
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <main className={inter.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}

export default appWithTranslation(App);
