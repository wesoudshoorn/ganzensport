import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TennisPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid-cols-3 gap-8 text-white ">
      <div>
        <h1 className="font-bold text-5xl mb-4 leading-tight">Oefeningen</h1>
        <ol className="text-xl max-h-screen overflow-auto ">
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">1.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">2.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">3.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">4.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">5.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">1.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">2.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">3.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">4.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">5.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">1.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">2.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">3.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">4.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">5.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">1.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">2.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">3.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">4.</span> Naam van de oefening
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center border-b-2 border-gray-600 py-3"
            >
              <span className="w-12">5.</span> Naam van de oefening
            </Link>
          </li>
        </ol>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold text-5xl mb-4 leading-tight">Oefening 21</h1>
        <iframe
          title="Video Player"
          width="704"
          height="396"
          src="https://www.youtube-nocookie.com/embed/vD_YDv2ymno"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default TennisPage
