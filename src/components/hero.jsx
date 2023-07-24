import React from 'react'
import "../hero.css"
const Hero = (props) => {
  return (
    <>
      <div className='hero-img'>
        <div className="heading">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
        </div>
      </div>
    </>
  )
}

export default Hero
