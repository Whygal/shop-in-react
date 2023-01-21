import "./style.css"
import React, {useContext} from "react"
import { MyContext } from "../../MyContext"
import Button from '@mui/material/Button';

const Product = (p) => {
  const dataFromContext= useContext(MyContext)
  // const toCart = dataFromContext.productsToShop

   function productToCart() {
    dataFromContext.setProductsToShop((oldCart) => [...oldCart, p])  
  }

  return(
      <div className="product-card" id={p.id}>
          <div className="product-image">
            <img 
              src={p.image}
            alt=""
            />
          </div>
          <div className="product-info">
            <h5>{p.title}</h5>
            <h6>{p.price}$</h6>
            <Button>
              <img className="shoppingCartImg"
            src={dataFromContext.cartImg} 
            alt="" onClick={productToCart}
            />
              </Button>
          </div>
        </div>
    )
  }

  export default Product