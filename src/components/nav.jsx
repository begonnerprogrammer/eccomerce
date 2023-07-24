import React, { useState } from 'react'
import "../nav.css";
import {Link} from "react-router-dom";
import { FaAlignJustify} from "react-icons/fa";
import { AiOutlineClose} from "react-icons/ai";
const Nav = () => {
    const [click,setClick]=useState(false);
    const handleclick=()=>{
      setClick(!click)
    }
    const [color,setColor]=useState(false);
    const handlecolor=()=>{
      if(window.scrollY>=100){
        setColor(true)
      }
      else{
        setColor(false)
      }
    }
    window.addEventListener("scroll",handlecolor)
       return (
    <>
    {/* Listen to next line carefully */}
      <div className={color? "header header-bg" : "header"}>
        <Link to={'/'}> <h1>Protfolio</h1> </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
                <Link to={'/Projects'}>Projects</Link>
            </li>
            
        </ul>
        <div className="hamburger" onClick={handleclick}>
          {click ? (<AiOutlineClose size={20} style={{color:"#fff"} }/>) : (
  <FaAlignJustify size={20} style={{color:"#fff"}}/> )}
   
        </div>

      </div>
    </>
  )
}

export default  Nav;
