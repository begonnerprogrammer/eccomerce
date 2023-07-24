import React from 'react'
import "../home.css"
import Img from "../images/istockphoto-1305012465-1024x1024.jpg";
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
    <p>aidhjasdjsapd</p>
    <h1>React developer</h1>
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
