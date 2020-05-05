import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
    height: 75px;
    margin-bottom: 20px;
    background-color: #6F73D2;
    display:flex;
    align-items:center;
    justify-content:center;
    user-select: none;
`;
const StyledLogo = styled.a`
    font-size: 47px;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    color: white;


    &:hover{
        cursor:pointer;
    }
`;
const Header: React.FunctionComponent = () => {
    return (
        <StyledHeader>
            <Link href='/'>
                <StyledLogo>the POST</StyledLogo>
            </Link>
        </StyledHeader>
    );
};

export default Header;
