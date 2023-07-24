import React from 'react'
import "../form.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {
  const history=useNavigate();

  //hooks
  const [user,setUser]=useState({
    name:"",email:"",subject:"",massage:""
  })
;

//store data in states
  const handlechange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   console.log(name,value)
   setUser((prev)=>{
    return {...prev,[name]:value}
   })
  }
 


const postdata=async(e)=>{
   e.preventDefault();
   const {name,email,massage}= user;
   //Sending data to database
  const res=await fetch('/register',{
    //rrules to write
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,massage,
    })
  })

  const data=await res.json();

  if(data.status===422 || !data){
    console.log("Invalid")
  }
  else{
    console.log("Valid")
    history('/')
    alert("Submited succesfully")
  }
}

  return (
    <>
      <div className="form">
       <form method='POST'>
        <label htmlFor='name'>Your Name</label>
        <input autoComplete='off' name='name' value={user.name}   onChange={handlechange} type="text" />
        <label  htmlFor='email'>Email</label>
        <input autoComplete='off' name='email'  value={user.email}   onChange={handlechange} type="email" />
        {/* <label  htmlFor='subject' > Subject </label>
        <input autoComplete='off' name='subject'  value={user.subject}   onChange={handlechange} type="text" /> */}
        <label  htmlFor='massage' >Massage</label>
            <input type="text" name='massage' value={user.massage}  onChange={handlechange}/>
        <button className='btn' onClick={postdata}>Submit</button>
       </form>
      </div>
    </>
  )
}

export default Form
