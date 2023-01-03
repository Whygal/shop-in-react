import "./style.css"

const SortBy = () => {
    let selectList1 = ['All Jackets','2016','jacket',
    'Jackets','layers','Obermeyer','Roxy','womens']
  
    return(
              <select>
                {selectList1.map((el,index) => <option key={index}>{el}</option>)}
              </select>
    )
  }

  export default SortBy