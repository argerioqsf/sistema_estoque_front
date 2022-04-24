import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { UserContextProvider } from '../contexts/UserContext';
import GlobalStyle from '../styles/globals';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {

  const getLayout = Component.getLayout || ((page) => page)

  return  (
    <UserContextProvider>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </UserContextProvider>
  );
}

export default MyApp
