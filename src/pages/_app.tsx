import { AppProps } from 'next/app';
import { UserContextProvider } from '../contexts/UserContext';
import GlobalStyle from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return  (
    <UserContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp
