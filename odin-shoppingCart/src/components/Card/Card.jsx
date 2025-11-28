import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './Card.css'

export default function Card({ product, addToCart }) {
  
  const [count, setCount] = useState(1);

  const handleInput = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setCount(value);
  }

  return (
    <div className="shopCard" name={product.id} id={product.id}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="shopCardDetailWrapper">
        <div>
          <li>{product.title}</li>
        </div>
        <div>
          <div>
            <span>{product.price}$</span>
          </div>
          <div>
            <input onChange={handleInput} min={1} type="number" value={count} />
          </div>
        </div>
      </div>
      <div className="shopCardButton">
        <button onClick={() => addToCart(product, count)}>Add to card</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};