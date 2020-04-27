import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allPagesDataYaml } }) => (
  <Layout>
    <SEO title="Home" />
    <div className="grid gap-8 text-white text-xl max-w-2xl mx-auto p-10">
      <div>
        <h1 className="font-bold text-5xl mb-4 leading-tight">Ganzensport Tennisspel!</h1>
        <p className="text-gray-300">Ganzensport is een combinatie van een bordspel en tennis. Je speelt het alleen of samen, en de oefeningen helpen je om een fitte, betere tenniser te worden!</p>
      </div>
      <div>
        <h2 className="font-bold text-3xl mb-2">Print het bordspel uit</h2>
        <p className="text-gray-300">
          Download de PDF en print het bordspel uit! Je kunt ook de zwart-witversie uitprinten als je niet teveel inkt wil verspillen.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-3xl mb-2">Dobbel, video, sport!</h2>
        <p className="text-gray-300">
          Elk vakje waar je op landt heeft een opdracht. Elke opdracht heeft weer een video waarbij wordt voorgedaan hoe het moet.
        </p>
      </div>
      <div>
        {allPagesDataYaml?.edges.map((item, index) => {
          const { node } = item

          return (
            <Link
              to={`/${node?.title.toLowerCase()}`}
              className="group flex p-6 text-2xl bg-gray-900 text-white rounded-lg font-bold justify-between items-center"
              key={index}
            >
              Speel nu {node?.title} ganzensport!
              <span
                role="img"
                aria-label=""
                className="group-hover:scale-150 transition duration-200 ease-in-out transform text-4xl"
              >
                {node?.emoji}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </Layout>
)

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
