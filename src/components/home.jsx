import React from 'react'
import "../home.css"
import Img from "../images/coding.jpg";
import { Link } from 'react-router-dom';
import Work from './work';
const Home = () => {
  return (
    <>
    <div className="background">
      <div className="overlay">
      <img src={Img} alt="" className='background-img' />
      </div>
   <div className="content">
    <p>Hello Sir!</p>
    <h1>I am  a React developer.</h1>
    <Link to={'/projects'} className='btn'>
    Projects
   </Link>
   <Link to={'/contact'} className='btn'>Contact</Link>
   </div>
 
    </div>
    <Work/>
    </>
  )
}

export default Home
