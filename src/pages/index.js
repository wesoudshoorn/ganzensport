import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-auto max-w-2xl">
    <h1 className="font-bold text-green-700 text-5xl mb-2">Hoe speel je Ganzensport?</h1>
    <ol className="grid gap-6 text-xl mb-10 bg-white p-10 border-2 border-green-700 border-t-8 rounded-lg">
      <li>
        <h2 className="font-bold text-green-700 text-3xl mb-2">1. Kies je sport</h2>
        <p>We hebben momenteel alleen nog tennisversie, maar er komen snel meer sporten aan!</p>
      </li>
      <li>
        <h2 className="font-bold text-green-700 text-3xl mb-2">2. Print het bordspel uit</h2>
        <p>Download de PDF en print het uit. Als vereniging kun je natuurlijk ook printen op A3 en het mooi lamineren.</p>
      </li>
      <li>
        <h2 className="font-bold text-green-700 text-3xl mb-2">3. Speel het spel</h2>
        <p>Je hebt alleen zelf een dobbelsteen en een paar pionnen nodig.</p>
      </li>
      <li>
        <h2 className="font-bold text-green-700 text-3xl mb-2">4. Volg de videos</h2>
        <p>Elke oefening heeft een korte video. Doe deze oefening als je op het vakje staat. Je spelgenoten mogen altijd meedoen, zelfs als het hun beurt niet is!</p>
      </li>
      <li>    <Link to="/tennis" className="bg-green-600 no-underline text-white p-4 px-6 font-bold rounded-lg text-center block text-xl">Speel de tennisversie</Link>

      </li>
    </ol>
    </div>

  </Layout>
)

export default IndexPage
