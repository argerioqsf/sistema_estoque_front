import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const LayoutAdmin: React.FC = ({children}) => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Navbar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    title="teste layout"
                />
                <Sidebar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                />
                <main>{children}</main>
            </IconContext.Provider>
        </>
    );
}

export default LayoutAdmin;