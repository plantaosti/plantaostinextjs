import { GraphQLClient, gql } from 'graphql-request'
import { format } from 'date-fns'
import { Header } from '@/components/Header'

export default async function Home() {
  const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

  const end = format(Date.now(), "yyyy-MM-dd'T'15:00:00+00:00")
  const query = gql`
    query MainHome($end: DateTime) {
      plantoes(where: { datetimeend_gte: $end }, first: 3) {
        farmacias {
          ... on Farmacia {
            id
            name
            neighborhood
            phone
            street
            slug
            urllogo
          }
        }
        id
        datetimestart
        datetimeend
      }
      farmacias(stage: PUBLISHED, first: 5) {
        id
        slug
        name
        urllogo
        neighborhood
        phone
      }
      apoiadores(last: 20) {
        ativo
        name
        slug
        url
        id
      }
      posts(orderBy: publishedAt_ASC) {
        title
        thumbnail {
          url
        }
        slug
        id
        views
      }
    }
  `
  const data = await graphcms.request(query, { end })
  return (
    <>
      <Header />
      <div>
        <h3>teste</h3>
        {data.plantoes.map((plantao) => {
          return <h1 key={plantao.id}>{plantao.farmacias.name}</h1>
        })}
      </div>
    </>
  )
}
