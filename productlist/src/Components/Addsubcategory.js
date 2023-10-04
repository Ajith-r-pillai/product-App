import React, { useEffect, useState } from 'react'
import './Addcategory.css'
import uuid from "react-uuid";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function Addsubcategory() {
    const [sid, setsid] = useState("");
    const [ sparentid, setsparentid] = useState("");
    const [ sgparentid, setsgparentid] = useState([]);
    const [sname, setsname] = useState("");
    const [simage, setsimage] = useState("");
    const [pcount, setpcount] = useState("");
    const params=useParams()
const navigate=useNavigate()
useEffect(()=>{
    setsparentid(params.id)
    setsid(uuid().slice(0,3))},[]
        
        )
   const addsubcategory=async (e)=>{
       e.preventDefault()
      setsid(uuid().slice(0,3))
    
      const body={
        sid,
        sparentid,
        sgparentid,
        sname,
        simage
      }
     
    try{
     const result=await axios.post('http://localhost:8000/AddSubcategory',body)
    
    alert(result.data.message)
    // navigate('/')
   
}catch(error){
    
alert(error.response.data.message)
navigate('/')

   }}
   
  return (
    <div className='addcategory-main'>
    <div class="login-box">
<h2> Create SubCategory</h2>
<form>
  <div class="user-box">
    <input onChange={(e)=>setsname(e.target.value)} type="text" name="" required=""/>
    <label>Subcategory Name</label>
  </div>
  <div class="user-box">
    <input onChange={(e)=>setsimage(e.target.value)} type="text" name="" required=""/>
    <label>Imae URL</label>
  </div>
 <button onClick={(e)=>addsubcategory(e)}>
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

export default Addsubcategory