import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {
    Container,
        ListMenuItens,
            CloseSideBar,
                ContentCloseSideMenu,
            MenuIten,
                LinkSideMenu,
                    ContentLinkSideMenu,
                        TitleIconMenu    

} from './styles';

type SideBarType = {
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SideBarType> = ({sidebar,setSidebar}) => {
    const [ menus, setMenus ] = useState([
        {
            path:"/",
            title:"Home",
            icon:<FaIcons.FaHome size={25}/>
        },
        {
            path:"/produto",
            title:"Produtos",
            icon:<FaIcons.FaProductHunt size={25}/>
        }
    ]); 
    
    const cahngeSidebar = () => setSidebar(!sidebar); 

    return (
        <Container style={{left: sidebar ? 0 : '-100%',transition: sidebar ? '350ms' : '850ms'}}>
            <ListMenuItens>
                <CloseSideBar>
                    <ContentCloseSideMenu>
                        <AiIcons.AiOutlineClose size={25} onClick={cahngeSidebar}/>
                    </ContentCloseSideMenu>
                </CloseSideBar>
                {menus && menus.map((menu,index)=>{
                    return (
                        <MenuIten key={index} >
                            <LinkSideMenu href={menu.path} >
                                <ContentLinkSideMenu> 
                                    {menu.icon}
                                    <TitleIconMenu>
                                        {menu.title}
                                    </TitleIconMenu>
                                </ContentLinkSideMenu>
                            </LinkSideMenu>
                        </MenuIten>
                    )
                })}
            </ListMenuItens>
        </Container>
    );
}

export default Sidebar;