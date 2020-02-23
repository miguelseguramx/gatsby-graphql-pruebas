import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import NavBar from './NavBar';

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
  
  h1{
    margin: 2rem 0rem 0rem;
    @media(min-width: 576px){
      margin: 0px 3rem;
    }
    @media(min-width: 1200px){
      margin: 0px;
    }
  }
`;

const Header = () => {
  return (
    <header
      css={css(`
        background-color: rgba(44,62,80);
        padding: 1rem;
      `)}
    >
      <div
        css={css(`
          max-width: 1200px;
          margin: 0 auto;

          @media(min-width: 576px){
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `)}
      >
        <HomeLink to='/'>
          <h1>Hotel Gatsby</h1>
        </HomeLink>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;