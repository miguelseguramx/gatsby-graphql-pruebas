import React from "react"
import styled from "@emotion/styled";
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFound = styled('main')`
  background-color: rgba(44,62,80);
  min-height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Link404 = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  padding: 2rem;
`

const NotFoundPage = () => (
  <Layout
    error404={true}
  >
    <NotFound>
      <h1>Ups... Error 404</h1>
      <h2>Pagina no encontrada</h2>
      <Link404 to="/">
        Ir al inicio
      </Link404>
    </NotFound>
  </Layout>
)

export default NotFoundPage
