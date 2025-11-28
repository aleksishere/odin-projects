import React, { useEffect, useState } from "react";
import './Shop.css';
import '../../index.css'
import Card from '../Card/Card.jsx'
import PropTypes from "prop-types";

export default function Shop({cart, setCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error while fetching", error));
  }, [])
  
  const addToCart = (product, count) => {
    setCart((prevCart) => {
      const exists = prevCart.some(item => item.id === product.id)
      if (exists) {
        return prevCart.map(item =>
          item.id === product.id ? {...item, quantity: item.quantity + count} : item
        )
      }
      return [...prevCart, {...product, quantity: count}]
    });
  }

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  return (
    <>
      <main className="inter-400">
        <ul className="shop">
          {products.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </ul>
      </main>
    </>
  )
}

Shop.propTypes = {
  cart: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
};