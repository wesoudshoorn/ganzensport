import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({
  data: {
    pagesDataYaml: { title, exercises },
  },
}) => {
  const [videoSrc, setVideoSrc] = useState(exercises[0].videoSrc)

  const handleSetVideoSrc = src => {
    setVideoSrc(src)
  }

  console.log(exercises[0].videoSrc)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid grid-cols-3 gap-8 text-white ">
        <div>
          <h1 className="font-bold text-5xl mb-4 leading-tight">{`${title} Oefeningen`}</h1>
          <ol className="text-xl max-h-screen overflow-auto">
            {exercises.map((item, index) => {
              return (
                <li key={item + index}>
                  <button
                    onClick={() => handleSetVideoSrc(item?.videoSrc)}
                    className="flex items-center border-b-2 border-gray-600 py-3"
                  >
                    <span className="w-12">{`${index + 1}.`}</span>{" "}
                    <span>{item?.title}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-5xl mb-4 leading-tight">Oefening 21</h1>
          <iframe
            title="Video Player"
            width="704"
            height="396"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GET_ACTIVITY_PAGE($slug: String!) {
    pagesDataYaml(fields: { slug: { eq: $slug } }) {
      title
      exercises {
        title
        videoSrc
      }
    }
  }
`
