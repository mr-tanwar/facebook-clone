import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/grid.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap', // fallback
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
