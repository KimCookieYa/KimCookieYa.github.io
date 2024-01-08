import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
