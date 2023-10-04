import React, { useEffect, useState } from 'react'
import './Addproduct.css'
import { useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from "axios";
function Addproduct() {

    const [pid, setpid] = useState("");
    const [parentid, setparentid] = useState("");
    const [pgparentid, setpgparentid] = useState([]);
    const [pname, setpname] = useState("");
    const [pprice, setpprice] = useState("");
    const [pimage, setpimage] = useState("");
    const params=useParams()
    const  navigate=useNavigate()
    useEffect(()=>{
        setparentid(params.id)
        setpid(uuid().slice(0,3))
        
             },[])

             const AddProduct=async (e)=>{
              
                e.preventDefault()
                setpid(uuid().slice(0,3))
             
            
              const body={
                pid,
                parentid,
                pgparentid,
                pname,
                pprice,
                pimage
                }
             
            try{
             const result=await axios.post('http://localhost:8000/addProduct',body)
            
            alert(result.data.message)
            // navigate('/')
           
        }catch(error){
            
        alert(error.response.data.message)
        navigate('/')
        
           }}

  return (
    <div className='addprdct-main'>
            <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" onChange={(e)=>setpname(e.target.value)} type="text" placeholder="Product Name" />
        <div class="cut"></div>
        {/* <label for="firstname" class="placeholder">First name</label> */}
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" onChange={(e)=>setpprice(e.target.value)} type="text" placeholder="Product Price" />
        <div class="cut"></div>
        {/* <label for="lastname" class="placeholder">Last name</label> */}
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" onChange={(e)=>setpimage(e.target.value)} type="text" placeholder="Image URL" />
        <div class="cut cut-short"></div>
        {/* <label for="email" class="placeholder">Email</label> */}
      </div>
      <button type="text" onClick={(e)=>AddProduct(e)} class="submit">submit</button>
    </div>   
  </div>
  )
}

export default Addproduct