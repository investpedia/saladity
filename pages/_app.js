import Layout from '../components/layout';
import '../styles/globals.css';
import NextScript from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextScript
            src='https://www.googletagmanager.com/gtag/js?id=G-change-me'
            strategy='afterInteractive'
          />
          <NextScript id='google-analytics' strategy='afterInteractive'>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-change-me');
            `}
          </NextScript>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
