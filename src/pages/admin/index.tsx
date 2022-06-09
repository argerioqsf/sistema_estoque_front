import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React, { ReactElement, useContext } from 'react';
import LayoutAdmin from '../../components/LayoutAdmin';
import { UserContext } from '../../contexts/UserContext';

import {
    Container
} from './styles';

export default function Admin() {
  const { user } = useContext(UserContext);
  return (
      <Container>
            ADMIN do {user?.nome}
      </Container>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx)=>{
//   const {['@SCC/token']:token} = parseCookies(ctx);

//   if (!token) {
//     return {
//       redirect:{
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {}
//   }
// }

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAdmin>
      {page}
    </LayoutAdmin>
  )
}