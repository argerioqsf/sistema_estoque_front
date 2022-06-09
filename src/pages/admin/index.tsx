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

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAdmin>
      {page}
    </LayoutAdmin>
  )
}