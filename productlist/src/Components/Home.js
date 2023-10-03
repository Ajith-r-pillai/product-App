import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import axios from "axios";
import Subcategories from "./Subcategories";
import { Link, useNavigate } from "react-router-dom";
import Addcategory from "./Addcategory";
function Home() {
  const [allcategory, setAllcategory] = useState([]);
  
  const [allProducts, setAllProducts] = useState([]);
  const navigate=useNavigate()

  const  Redirectto=(e)=>{
   
        navigate('/addc')
}
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/getallCategory");
    setAllcategory(result.data.category);
  
  };

  console.log(allcategory);
  // const fetchsubcategory=async()=> {
  //   const result = await axios.get("http://localhost:8000/getallSubCategory");
  //   setAllSubcategory(result.data.subcategory);

  // }
  // const fetchAllproducts=async()=> {
  //   const result = await axios.get("http://localhost:8000/getallProducts");
  //   setAllProducts(result.data.products);

  // }

  console.log(allProducts);

  useEffect(() => {
    fetchData();
  
  }, []);

  return (
    <div>
      <Header />
      <div className="Home-main">
        <div className="carousel-main">
          <div
            id="carouselExampleControls"
            style={{ width: "80%" }}
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{
                    height: "20rem",
                    width: "100%",
                    borderRadius: "3rem",
                  }}
                  src="https://i.postimg.cc/44BsPfd2/Solar-pc-3000x1200-CB577106624.jpg"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "20rem", borderRadius: "3rem" }}
                  src="https://i.postimg.cc/zGr1ZN5K/Homepage-Desktop-Hero-Template-3000x1200-22-June2023-ksd-Cricket-toys-2x-CB577185967.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "20rem", borderRadius: "3rem" }}
                  src="https://i.postimg.cc/pVwwzvm4/PFF-Unrec-3000-CB577063325.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
     
        <div className="">
          <div className="home-heading">
          <div className="home-heading-conent">
            <h1>Categories</h1>
            <Link to={'/addc'}> <button className="btn-classifi">New category <i class="fa-solid fa-folder-plus"></i></button></Link>
          </div>
          </div>
          {/* <button className="btn-classifi" onClick={(e)=>Redirectto(e)}>Add Product</button> */}
        
          <div className="pcard">
         
            {allcategory.map((item, index) => (
              <Categories data={item} />
            ))}
          </div>

          {/* <div className='pcard'>
{
allSubcategory.map((item, index)=>( <Subcategories data={item}/>
))}
</div> */}
          {/* <div className='pcard'>
{
allProducts.map((item, index)=>(  
<ProductCard data={item}/>
))}
</div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
