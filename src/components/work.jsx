import React from 'react'
import "../workcard.css"
import { Link } from 'react-router-dom'
import Workcard from './workcard';
import Workdata from './workdata';
const Work = () => {
  return (
    <>
      <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
          {
            Workdata.map((val,index)=>{
                return(
                    <Workcard
                    key={index}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    link={val.link}
                    />
                )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Work;
