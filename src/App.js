import './App.css';
import React, { useState, useEffect } from 'react';
// import data from './components/Product/data';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Products from "./components/Products/Products"
// import { useContext } from 'react';
import { MyContext } from './MyContext';


const App = () => {

  const [chosenCategories, setChosenCategories] = useState([])
  const [products ,setProducts] = useState([])

  const getProducts = async function () {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const answer = await response.json();
      setChosenCategories(answer);
      setProducts(answer);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect ( ()=>{
    getProducts();
  },[])

  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index); 
  
   return (
    <MyContext.Provider value = {{setChosenCategories,categories,chosenCategories,products}}>
    <div className="App">
     <Header />
        <Nav/>
        <Products/>
    </div>
     </MyContext.Provider>
  );
}

export default App;
