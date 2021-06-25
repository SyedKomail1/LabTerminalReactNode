import logo from './logo.svg';
import React, { useState,useEffect } from 'react'
import './App.css';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    axios.get("/api/products").then(res => {
      setProducts(res.data);
    }).catch(err=>{
      console.log(err);
    })
  })
  return (
    <div >
      <ul>
        {products.map((p,index) =>(
         
            <li key={index} > {p}</li>
          

        ))}
        </ul>
<h1> hello </h1>     
    </div>
  );
}

export default App;
