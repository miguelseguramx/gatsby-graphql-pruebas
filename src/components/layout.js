import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import useSeo from '../hooks/useSeo';

const Layout = (props) => {
  const { error404 } = props
  const seo = useSeo();
  const { fallbackSeo: { title, description } } = seo;

  return (
    <>
      <Global 
        styles={css(`
          html{
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,*:before, *:after{
            box-sizing: inherit;
          }
          body{
            font-size: 18px;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif; 
          }
          h1, h2, h3{
            margin: 0px;
            line-height: 1.5;
          }
          h1, h2{
            font-family: 'Roboto', serif;
          }
          h3{
            font-family: 'PT Sans', sans-serif; 
          }
          ul{
            list-style: none;
            margin: 0px;
            padding: 0px;
          }
        `)}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      { !error404 ? <Header /> : null }
      {props.children}
      { !error404 ? <Footer title={title}/> : null }
    </>
  );
};

export default Layout;