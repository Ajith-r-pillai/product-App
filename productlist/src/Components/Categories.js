import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories({data,count}) {
  return (
    <>
    <Link style={{textDecoration:'none'}} to={'/view/'+data.cid}>
      <div className="categories-main">
        <div class="card"  style={{width: "20rem",display:'flex' ,fontFamily:"Quicksand"}}>
          <img
            src={data.cimage}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{data.cname}<sup>({count})</sup></h5>
            <p></p>
            <div className="category-btn" >
            <Link to={'/addproduct/'+data.cid}><button style={{width:'8rem',backgroundColor:' rgba(49,135,238,255)'}} className="btn-classifi">Product <i class="fa-solid fa-square-plus"></i></button></Link>
       <Link to={'/addsubcategory/'+data.cid}> <button  style={{width:'8rem',backgroundColor:' rgba(49,135,238,255)'}} className="btn-classifi">Subcategory <i class="fa-solid fa-file-circle-plus"></i></button></Link>
           
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default Categories;
