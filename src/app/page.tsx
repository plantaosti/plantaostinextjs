import { GraphQLClient } from 'graphql-request'

export default async function Home() {
  const graphcms = new GraphQLClient(
    'https://api-sa-east-1.hygraph.com/v2/cl4ybmv9v15ik01uph8kp5vwm/master',
  )
  console.log(graphcms)
  // const { farmacias } = await graphcms.request(
  //   `
  //     {
  //       farmacias{
  //         name
  //         neighborhood
  //         slug
  //         id
  //       }
  //     }
  //   `,
  // )
  // console.log(farmacias)
  return (
    <>
      <div>
        <h1>test</h1>
      </div>
    </>
  )
}
