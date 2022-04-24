import React, { ReactNode, useState } from 'react';

import {
  Container,
    ContentOpenSideBar
} from './styles';
import * as FaIcons from 'react-icons/fa';

type NavBarType = {
    title: string,
    children?: ReactNode,
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavBarType> = ({title,sidebar,setSidebar}) => {

 const cahngeSidebar = () => setSidebar(!sidebar); 

  return (
      <Container>
        <ContentOpenSideBar>
          <FaIcons.FaBars size={25} onClick={cahngeSidebar}/>
        </ContentOpenSideBar>
      </Container>
  );
}

export default Navbar;