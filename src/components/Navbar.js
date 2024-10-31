import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavbarContainer = styled.nav`
    background-color: #f8f9fa; /* Light background */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect */
    border-bottom: 1px solid #d3d3d3; /* Light gray border */;
    `;

const NavbarBrand = styled(Link)`
    color: #000; /* Navbar text color */
    text-decoration: none; /* Remove underline */
     font-size:1.2rem;
`;


const Navbar = () => {
    return (
        <NavbarContainer  className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <NavbarBrand to="/">Mertcan İncioğulları | Full Stack Developer</NavbarBrand>
           
            </div>
        </NavbarContainer>
    );
};

export default Navbar;