import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to={"/"}><div>Home</div></NavLink>
                <NavLink to={"/about"}><div>About</div></NavLink>
                <NavLink to={"/posts"}><div>Blog</div></NavLink>
            </header>
            <Outlet/>
        </>
    );
};

export default Layout