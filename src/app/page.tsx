import { GraphQLClient, gql } from 'graphql-request'
import { format } from 'date-fns'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Newsletter } from '@/components/News'
import { Produto } from '@/components/Produto'
import { Noticias } from '@/components/Notiticias'
import { Apoiadores } from '@/components/Apoiadores'
import { useSuperHomeQuery } from 'graphql/generated'

export default async function Home() {
  // const graphcms = new GraphQLClient(
  //   `${process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT}`,
  // )

  const end = format(Date.now(), "yyyy-MM-dd'T'15:00:00+00:00")
  const { data, error, loading } = await useSuperHomeQuery({
    variables: { end },
  })
  // const query = gql`
  //   query MainHome($end: DateTime) {
  //     plantoes(where: { datetimeend_gte: $end }, first: 3) {
  //       farmacias {
  //         ... on Farmacia {
  //           id
  //           name
  //           neighborhood
  //           phone
  //           street
  //           slug
  //           urllogo
  //         }
  //       }
  //       id
  //       datetimestart
  //       datetimeend
  //     }
  //     farmacias(stage: PUBLISHED, first: 5) {
  //       id
  //       slug
  //       name
  //       urllogo
  //       neighborhood
  //       phone
  //     }
  //     apoiadores(last: 20) {
  //       ativo
  //       name
  //       slug
  //       url
  //       id
  //     }
  //     posts(orderBy: publishedAt_ASC) {
  //       title
  //       thumbnail {
  //         url
  //       }
  //       slug
  //       id
  //       views
  //     }
  //   }
  // `
  // const data = await graphcms.request(query, { end })

  if (loading) {
    return <h2>carregando</h2>
  }
  if (error) {
    return (
      <>
        <h2>Erro</h2>
      </>
    )
  }
  return (
    <>
      <Header />
      <div>
        <h3>teste</h3>
        {data?.plantoes.map((plantao: any) => {
          return <h1 key={plantao.id}>{plantao.farmacias.name}</h1>
        })}
      </div>
      {/* <Apoiadores apoiadores={data?.apoiadores} /> */}
      <Noticias posts={data?.posts!} />
      <Produto />
      <Newsletter />
      <Footer />
    </>
  )
}
