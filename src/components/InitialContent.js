import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const InitialText =  styled('div')`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`

const InitialContent = () => {
  const information = useStaticQuery(graphql`
    query{
      allDatoCmsPage(filter: { slug: {eq: "Inicio"} }){
        nodes{
          title
          content
          image{
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        } 
      }
    }
  `);

  // console.log(information.allDatoCmsPage.nodes[0])
  
  const { title, content, image } = information.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2
        css={css(`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `)}
      >{title}</h2>
      <InitialText>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </InitialText>
    </>
  )
}

export default InitialContent
