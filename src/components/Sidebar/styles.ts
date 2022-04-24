import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
`;

export const ListMenuItens = styled.ul`
  width: 100%;
`;

  export const CloseSideBar = styled.li`
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  `;

    export const ContentCloseSideMenu = styled.div`
      margin-left: 2rem;
      font-size: 2rem;
      background: none;
      cursor: pointer;
    `;

  export const MenuIten = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 16px 8px 16px;
    list-style: none;
    height: 60px;
  `;

    export const LinkSideMenu = styled(Link)`
      margin-left: 2rem;
      font-size: 2rem;
      background: none;text-decoration: none;
      color: #f5f5f5;
      font-size: 18px;
      width: 95%;
      height: 100%;
      padding: 0 16px;
      border-radius: 4px;
    `;

      export const ContentLinkSideMenu = styled.div`
        cursor: pointer;
        width: 100%;
        padding: 5px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        :hover {
          background-color: #1a83ff;
        }
      `;

        export const TitleIconMenu = styled.span`
            color: #fff;
            margin-left: 16px;
        `;
