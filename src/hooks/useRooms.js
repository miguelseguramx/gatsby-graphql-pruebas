// If you're going to use multiple times a frgmento of code, you should put it in into a hook

import { useStaticQuery, graphql } from 'gatsby';

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query{
      allDatoCmsRoom{
        nodes {
          title
          id
          slug
          content
          image{
            fluid(maxWidth: 1200){
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(data.allDatoCmsRoom.nodes)
  return data.allDatoCmsRoom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    content: room.content,
    image: room.image,
    slug: room.slug,
  }))
} 

export default useRooms