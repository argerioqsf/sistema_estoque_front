import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return  (
    <> 
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
