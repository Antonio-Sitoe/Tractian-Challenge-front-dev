import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStyle } from '../GlobalStyle';
import '@splidejs/splide/dist/css/splide.min.css';

// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default MyApp;
