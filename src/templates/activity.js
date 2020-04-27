import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import YouTube from 'react-youtube-embed'

export default ({
  data: {
    pagesDataYaml: { exercises },
  },
}) => {
  const [videoSrc, setVideoSrc] = useState(exercises[0]?.videoSrc)
  const [exercise, setExercise] = useState(exercises[0]?.title)

  const handleSetVideoSrc = (title, src) => {
    setVideoSrc(src)
    setExercise(title)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="sm:flex flex-wrap text-white">
        <div className="p-6 lg:p-10 bg-blue-800 sm:w-1/2 lg:w-1/3">
          <h1 className="font-bold text-2xl mb-4 leading-tight">Oefeningen</h1>
          <ol className="grid grid-cols-7 gap-2">
            {exercises.map((item, index) => {
              return (
                <li key={item + index}>
                  <a
                    onClick={() =>
                      handleSetVideoSrc(item?.title, item?.videoSrc)
                    }
                    className="cursor-pointer flex items-center justify-center bg-blue-900 rounded-lg hover:bg-orange-500"
                  >
                    <span>{`${index + 1}`}</span>{" "}
                    <span className="hidden">{item?.title}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="p-6 lg:p-10 sm:w-1/2 lg:w-2/3">
          <h1 className="font-bold text-2xl mb-4 leading-tight">{exercise}</h1>
          <YouTube id={videoSrc} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GET_ACTIVITY($slug: String!) {
    pagesDataYaml(fields: { slug: { eq: $slug } }) {
      title
      exercises {
        title
        videoSrc
      }
    }
  }
`
