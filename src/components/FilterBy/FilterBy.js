import "./style.css"
import React from "react"
// import data from "../Product/data"
import { useContext } from "react"
import { MyContext } from "../../MyContext"

const FilterBy = () => { 

  const dataFromContext = useContext(MyContext);

  const onFilterChange = (returnCategory) =>{
    const dataToFilter = dataFromContext.products.filter((el) => el.category === returnCategory)
    if(returnCategory === "All"){
      dataFromContext.setChosenCategories(dataFromContext.setChosenCategories)
    }else{
     dataFromContext.setChosenCategories(dataToFilter)
    } 
  }
  //  const arr = ['Featured','Best Selling','Alphabetically, A-Z',
  //   'Alphabetically, Z-A','Price, low to high','Price, high to low',
  //   'Date, new to old','Date, old to new']
    return(
              <select defaultValue={'All'}  onChange={(e) => onFilterChange(e.target.value)}>
                <option value={"All"}>All the products</option>
                {dataFromContext.categories.map((el,index) => <option key={index} value={el}>{el}</option>)}
              </select>            
    )
  }

  export default FilterBy