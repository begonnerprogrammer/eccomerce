import React from 'react'
import Hero from "./hero"
import Pricecard from "./pricing";
import Work from './work';
const Projects = () => {
  return (
    <>
      <Hero heading="Projects." text="Some of my recent Works."/>
      <Work/>
      <Pricecard/>
          </>
  )
}

export default Projects
