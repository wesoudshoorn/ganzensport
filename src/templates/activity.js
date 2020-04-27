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
      <div className="flex text-white">
        <div className="p-10 bg-blue-800">
          <h1 className="font-bold text-5xl mb-4 leading-tight">Oefeningen</h1>
          <ol className="grid grid-cols-12 gap-4">
            {exercises.map((item, index) => {
              return (
                <li key={item + index}>
                  <a
                    onClick={() =>
                      handleSetVideoSrc(item?.title, item?.videoSrc)
                    }
                    className="cursor-pointer w-12 h-12 flex items-center justify-center text-xl bg-blue-900 rounded-lg hover:bg-orange-500"
                  >
                    <span>{`${index + 1}`}</span>{" "}
                    <span className="hidden">{item?.title}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="flex-1 p-10">
          <h1 className="font-bold text-5xl mb-4 leading-tight">{exercise}</h1>
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
