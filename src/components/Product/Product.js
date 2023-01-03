import "./style.css"

const Product = (p) => {
    return(
      <div className="product-card">
          <div className="product-image">
            <img 
              src={p.image}
            alt=""
            />
          </div>
          <div className="product-info">
            <h5>{p.title}</h5>
            <h6>{p.price}$</h6>
          </div>
        </div>
    )
  }

  export default Product