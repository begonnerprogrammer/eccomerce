import React from 'react'
import "../priccard.css"
import {Link} from "react-router-dom";
const Pricing = () => {
  return (
    <>
      <div className='pricing'>
 <div className="card-container">
    <div className="card">
        <h3>- Basic -</h3>
        <span className='bar'></span>
        <h1 className='btc'>$100</h1>
        <p>-3days-</p>
        <p>-3pages-</p>
        <p>Featured</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className="btn">Purchase Now</Link>
    </div>
    <div className="card">
        <h3>- Premium -</h3>
        <span className='bar'></span>
        <h1 className='btc'>$200</h1>
        <p>-2days-</p>
        <p>-3pages-</p>
        <p>Featured</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className="btn">Purchase Now</Link>
    </div>
    <div className="card">
        <h3>- Business -</h3>
        <span className='bar'></span>
        <h1 className='btc'>$300</h1>
        <p>-5days-</p>
        <p>-8pages-</p>
        <p>Featured</p>
        <p>-Responsive Design-</p>
        <Link to="/contact" className="btn">Purchase Now</Link>
    </div>
 </div>
      </div>
    </>
  )
}

export default Pricing
