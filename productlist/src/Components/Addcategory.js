import React, { useEffect, useState } from 'react'
import './Addcategory.css'
import uuid from "react-uuid";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Addcategory() {
    const [cid, setcid] = useState("");
    const [cimage, setcimage] = useState("");
    const [cname, setcname] = useState("");
    const [pcount, setpcount] = useState([]);
  const  navigate=useNavigate()
    useEffect(()=>{
       
     setcid(uuid().slice(0,3))
        
             },[])
  
   const addcategory=async (e)=>{

        e.preventDefault()
      setcid(uuid().slice(0,3))
    
      const body={
        cid,
       cname,
       cimage
        }
     
    try{
     const result=await axios.post('http://localhost:8000/addCategory',body)
    
    alert(result.data.message)
    navigate('/')
   
}catch(error){
    
alert(error.response.data.message)
navigate('/')

   }}
   
  return (
    <div className='addcategory-main'>
    <div class="login-box">
<h2> Create Category</h2>
<form>
  <div class="user-box">
    <input onChange={(e)=>setcname(e.target.value)} type="text" name="" required=""/>
    <label>Category Name</label>
  </div>
 
  <div class="user-box">
    <input onChange={(e)=>setcimage(e.target.value)} type="text" name="" required=""/>
    <label>Image URL</label>
  </div>
 <button className='a' onClick={(e)=>addcategory(e)}>
    <span></span>
    <span></span>
    <span
    ></span>
    <span></span>
    Create
  </button>
</form>
</div></div>
  )
}

export default Addcategory