import React, { useEffect, useState } from 'react'
import './Subcategories.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
function Subcategories({data,subcategory,poducts}) {
  const [refreshCount, setRefreshCount] = useState([]);
const Navigate=useNavigate()
 let count=[]
 const Reloadpageview=(e)=>{
  Navigate('/view/'+data.sid)
  window.location.reload()

}
//  count=poducts.filter((item)=>item.parentid==data.sid?item.parentid:item.pgparentid.filter=((item)=>item==data.sid))
function countObjectsAndNestedArray(arr, numberToMatch) {
  let count = 0;

  // Iterate through the main array of objects
  for (const obj of arr) {
    // Check if the object has an 'Id' property matching the number
    if (obj.parentid === numberToMatch) {
      count++;
    }

    // Check if there's a nested array of numbers
    else  {
      // Iterate through the nested array and count occurrences of the number
      for (const nestedNumber of obj.pgparentid) {
        if (nestedNumber === numberToMatch) {
          count++;
        }
      }
    }
  }

  return count;
}



// const numberToMatch = 1;
const result = countObjectsAndNestedArray(poducts,data.sid);







// console.log(numberToMatch,result);
  return (
 <Link  style={{textDecoration:'none'}} to={'/view/'+data.sid} onClick={(e)=>Reloadpageview(e)}>

      <div className=''style={{marginTop:"2rem"}} >
      <div class="card" style={{width: "20rem",display:'flex',fontFamily:"Quicksand"}}>
      <img src={data.simage} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">{data.sname}({result})</h5>
      <p> </p>
      <div className="category-btn" >
            <Link to={'/addproduct/'+data.sid}><button style={{width:'8rem',backgroundColor:' rgba(49,135,238,255)'}} className="btn-classifi">Product <i class="fa-solid fa-square-plus"></i></button></Link>
       <Link to={'/addsubcategory/'+data.sid}> <button  style={{width:'8rem',backgroundColor:' rgba(49,135,238,255)'}} className="btn-classifi">Subcategory <i class="fa-solid fa-file-circle-plus"></i></button></Link>
   
            </div>
      </div>
    </div></div>
  
 </Link>
  )
}

export default Subcategories