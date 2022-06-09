import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React from 'react';

import { 
    Container 
} from './styles';



const usuario: React.FC = () => {
  return <Container>
      Listagem de usuarios
  </Container>;
}
export const getServerSideProps: GetServerSideProps = async (ctx)=>{
    const {['@SCC/token']:token} = parseCookies(ctx);
  
    if (!token) {
      return {
        redirect:{
          destination: '/usuario/login',
          permanent: false
        }
      }
    }
    return {
      props: {}
    }
  }


export default usuario;