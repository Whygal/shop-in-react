import "./FilterBy"
import FilterBy from "../FilterBy/main"
import "./SortBy"
import FilterBy from "../SortBy/main"

const Nav = () => {
    return(
        <nav className="product-filter">    
        <label>Filter By:</label>
        <FilterBy />
        <label>Sort By:</label>
        <SortBy />
      </nav>
    )
}

export default 