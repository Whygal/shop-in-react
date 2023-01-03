import "./style.css"
import React, {useContext} from "react";
// import data from "../Product/data";
import Product from "../Product/Product";
import { MyContext } from "../../MyContext";

const Products = ({chosenCategories}) => {
const dataFromContext= useContext(MyContext)
return(
        <section className="products">
      {dataFromContext.chosenCategories.map((p) => <Product 
      key={p.id}
      title={p.title}
       price={p.price}
       image={p.image}/>)}
    </section>
    )
}
export default Products