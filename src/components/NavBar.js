import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled('nav')`
  display: flex;
  justify-content: center;
  padding: 2rem;
  @media(max-width: 576px){
    padding: 1rem 3rem;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type{
    margin-right: 0;
  }

  &.actual-page {
    border-bottom: 2px solid #fff;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <NavLink
        to={'/'}
        activeClassName="actual-page"
      >
        Inicio</NavLink>
      <NavLink
        to={'/about'}
        activeClassName="actual-page"
      >
        Nosotros</NavLink>
    </Nav>
  );
};

export default NavBar;