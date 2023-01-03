import FilterBy from React/

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