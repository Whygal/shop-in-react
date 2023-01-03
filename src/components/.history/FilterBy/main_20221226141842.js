const FilterBy = () => {
    let selectList2 = ['Featured','Best Selling','Alphabetically, A-Z',
    'Alphabetically, Z-A','Price, low to high','Price, high to low',
    'Date, new to old','Date, old to new']
    return(
              <select>
                {selectList2.map((el,index) => <option key={index}>{el}</option>)}
              </select>            
    )
  }

  export default FilterBy