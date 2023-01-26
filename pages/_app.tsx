import Sidebar from '../components/Sidebar';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { ModalContextProvider } from '../store/modal-context';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalContextProvider>
        <Head>
          <title>Instagram</title>
          <link
            rel="shortcut icon"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Sidebar />
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  );
}
