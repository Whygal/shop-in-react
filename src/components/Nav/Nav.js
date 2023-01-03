import "./style.css"
import React from "react"
import FilterBy from "../FilterBy/FilterBy"
import SortBy from "../SortBy/SortBy"

const Nav = () => {
    return(
        <nav className="product-filter">    
        <label>Filter By:</label>
        <FilterBy></FilterBy>
        <label>Sort By:</label>
        <SortBy />
      </nav>
    )
}

export default Nav