import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Products from "./components/Products/Products"
import { MyContext } from './MyContext';
import Cart from './components/Cart/Cart';


const App = () => {
  const [products ,setProducts] = useState([])
  const [chosenCategories, setChosenCategories] = useState([])
  const [productsToShop, setProductsToShop] = useState([])
  const [productsInShop, setProductsInShop] = useState([])
  
  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index); 
  const cartImg="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
  const removeImgCart = "https://thumbs.dreamstime.com/z/remove-cart-icon-delete-shopping-cart-well-organized-fully-editable-remove-cart-icon-delete-shopping-cart-any-167546275.jpg"
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



   return (
    <MyContext.Provider value = {{setChosenCategories,categories,chosenCategories,products,cartImg,
     productsToShop, setProductsToShop, removeImgCart, productsInShop, setProductsInShop}}>
    <div className="App">
     <Header />
        <Nav/>
        <Cart/>
        <Products/>
    </div>
     </MyContext.Provider>
  );
}

export default App;
