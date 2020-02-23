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
    margin: 0rem 0rem 2rem;
    @media(min-width: 576px){
      margin: 0px 3rem;
    }
    @media(min-width: 1200px){
      margin: 0px 3rem 0px 0px;
    }
  }
`;

const Footer = ({ title }) => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        css={css(`
          background-color: rgba(44,62,80);
          margin-top: 5rem;
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
          <NavBar />
          <HomeLink to='/'>
            <h1>Hotel Gatsby</h1>
          </HomeLink>
        </div>
      </footer>
      <p
        css={css(`
          text-align: center;
          color: #fff;
          background-color: rgb(33,44,55);
          margin: 0px;
          padding: 1rem;
        `)}
      >{title}. Todos los derechos reservados {year} &copy;</p>
    </>
  );
};

export default Footer;