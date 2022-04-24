import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {
    Form
} from './componets';

import {
    Container
} from './styles';

export default function login() {
    return (
        <Container>
            <Form/>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const {['@SCC/token']:token} = parseCookies(ctx);

  if (token) {
    return {
      redirect:{
        destination: '/admin',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}