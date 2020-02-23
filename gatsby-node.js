exports.createPages = async ({ actions, graphql, reporter }) => {
  const result =  await graphql(`
    query{
      allDatoCmsRoom{
        nodes {
          slug
        }
      }
    }
  `)

  if (result.error) {
    reporter.pnaic('No hubo resultados', resultado.errors)
  }

  // Si hay paginas crea los archivos
  const rooms = result.data.allDatoCmsRoom.nodes;

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/components/RoomTemplate.js'),
      context: {
        slug: room.slug
      }
    })
  });
}