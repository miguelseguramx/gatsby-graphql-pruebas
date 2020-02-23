import React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from "../components/Layout";
import HotelImage from "../components/HotelImage";
import InitialContent from "../components/InitialContent";
import useRooms from '../hooks/useRooms';
import RoomPreview from '../components/RoomPreview';

const RoomList = styled('ul')`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`; 

const IndexPage = () => {
  const rooms = useRooms()
  return (
    <Layout>
      <HotelImage />
      <InitialContent />

      <h2
        css={css(`
          text-align:center;
          margin-top: 5rem;
          font-size: 3rem;
        `)}
      >
        Nuestras Habitaciones
      </h2>

      <RoomList>
        {rooms.map(room => (
          <RoomPreview
            room={room}
            key={room.id}
          />
        ))}
      </RoomList>
    </Layout>
  )
}


export default IndexPage
