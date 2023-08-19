import React from 'react'
import "../aboutcontent.css"
import { Link } from 'react-router-dom'
const Aboutcontect = () => {
  return (
    <>
     <div className='about'>
        <div className="left">
            <h1>My name is Usman.</h1>
            <p>
                Im a react front-end developer. I create responsive
                secure websites for my clients.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
        </div>
        {/* concept of grid for images */}
        <div className="right">
      <div className="img-container">
        <div className="img-stack top" >
   <img className='img' src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="img-stack bottom" >
   <img className='img' src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits-1024x512.jpg" alt="" />
        </div>
      </div>
        </div>
        </div> 
    </>
  )
}

export default Aboutcontect
