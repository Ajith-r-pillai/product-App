import React from 'react'
import './ProductCard.css'

function ProductCard({data}) {

  return (
    <div className='blockquote' style={{marginBottom:'4rem',marginTop:'2rem',marginRight:'1rem',fontFamily:"Quicksand"}}>  
  
  <div style={{width:'20rem',height:'6rem'}} class="row g-0">
    <div style={{width:'10rem',height:'6rem'}} class="col-md-4">
      <img style={{width:'100%',height:'100%'}}src={data.pimage} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div style={{width:'10rem',height:'6rem'}}  class="col-md-8">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"space-between"}} class="card-body">
        <h5  class="card-title">{data.pname}</h5>
        <p  style={{color:'rgba(49,135,238,255)'}} class="card-title">{data.pprice}₹</p>
        <div style={{color:'rgba(49,135,238,255)'}}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        
        </div>
       
      </div>
    </div>
  </div>
</div>
 
  )
}

export default ProductCard