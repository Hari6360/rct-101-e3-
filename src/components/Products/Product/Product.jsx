import React,{useState,useEffect} from "react";
import axios from "axios";

const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };

  const [prod, setProd] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((r)=>{
      let data=r.data
      setProd(data)
    })
  },[])
console.log(prod);
return (
  <div>
    {
      prod.map((elem)=>(
        <div data-cy={`product-${elem.id}`}>
        <h3 data-cy="product-name">{elem.name}</h3>
        <h6 data-cy="product-description">{elem.description}</h6>
        <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
        <div>
          <button data-cy="product-increment-cart-item-count-button">Increment</button>
          <span data-cy="product-count">
            {
              // Count here from CartItems
            }
          </span>
          <button data-cy="product-decrement-cart-item-count-button">Decrement</button>
          <button data-cy="product-remove-cart-item-button">Remove</button>
        </div>
        </div>
      ))
    }

  </div>
) }
  export default Product;