import React, { useEffect, useState } from "react";
import "./Women.css";

export default function Women() {

  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://myntra-clone1.herokuapp.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  },[]);

  return <div className="container">
    {products.map((x,i) => {
      return(
        <div>
          <img src={x.imageUrl}/>
          <b>{x.brand}</b>
          <p>{x.title}</p>
          <p>Rs {x.price}/-</p>
        </div>
      )
    })}
  </div>;
}
