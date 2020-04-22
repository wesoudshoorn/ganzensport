import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allPagesDataYaml } }) => {
  console.log(allPagesDataYaml)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid grid-cols-2 gap-8 text-white ">
        <div>
          <h1 className="font-bold text-5xl mb-4 leading-tight">
            Hoe werkt t?
          </h1>
          <ol className="grid gap-6 text-xl">
            <li>
              <h2 className="font-bold text-3xl mb-2">Kies je sport</h2>
              <p className="text-gray-500">
                We hebben momenteel alleen nog tennisversie, maar er komen snel
                meer sporten aan!
              </p>
            </li>
            <li>
              <h2 className="font-bold text-3xl mb-2">
                Print het bordspel uit
              </h2>
              <p className="text-gray-500">
                Download de PDF en print het uit. Als vereniging kun je
                natuurlijk ook printen op A3 en het mooi lamineren.
              </p>
            </li>
            <li>
              <h2 className="font-bold text-3xl mb-2">Dobbel, video, sport!</h2>
              <p className="text-gray-500">
                Je hebt alleen zelf een dobbelsteen en een paar pionnen nodig.
              </p>
            </li>
          </ol>
        </div>
        <div className="">
          <h1 className="font-bold text-5xl mb-4 leading-tight">
            Kies je sport!
          </h1>
          <ul className="text-3xl font-bold uppercase">
            {allPagesDataYaml?.edges.map((item, index) => {
              const { node } = item

              return (
                <li key={index}>
                  <Link
                    to={`/${node?.title.toLowerCase()}`}
                    className="group flex border-b-4 border-gray-600 py-3 justify-between items-center"
                  >
                    {node?.title}
                    <span
                      role="img"
                      aria-label=""
                      className="group-hover:scale-150 transition duration-200 ease-in-out transform"
                    >
                      {node?.emoji}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GET_ACTIVITIES {
    allPagesDataYaml {
      edges {
        node {
          title
          emoji
        }
      }
    }
  }
`
