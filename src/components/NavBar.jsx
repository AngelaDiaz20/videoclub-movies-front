import React from "react";
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)
    `background: #001320`;

const Tabs = styled(NavLink)
    `font-size:20px;
    margin-right: 40px;
    color: inherit;
    text-decoration: none;`


const Navbar = () => {

    return (
        <>
            <Header position='static'>
                <Toolbar>
                    {/* <Tabs to='/'>Lista de películas</Tabs>
                    <Tabs to='/add'>Agregar pelicula</Tabs> */}
                </Toolbar>
            </Header>
            <div>Navbar</div>
        </>
    );

};

export default Navbar;