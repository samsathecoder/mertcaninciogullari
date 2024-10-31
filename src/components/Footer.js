import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #f8f9fa; /* Light background */
    border-top: 2px solid #d3d3d3; /* Light gray border */
    box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1); /* Shadow effect */
    position: relative; /* To allow for shadowing */
    max-height:25px;
`;

const FooterContent = styled.div`
    text-align: center;
    padding: 0.5rem;
`;

const Footer = () => {
    return (
        <FooterContainer className="mt-auto py-3">
            <FooterContent>
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
