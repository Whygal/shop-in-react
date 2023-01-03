import FilterBy from React/Shop-in-react/

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