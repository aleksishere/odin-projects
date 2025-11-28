import React from "react";
import PropTypes from "prop-types";
import './Checkout.css';
import '../../index.css'

export default function Checkout({ cart, setCart }) {


  const handleChange = (id, value) => {
    const quantity = Math.max(1, Number(value));
    setCart(prevCart => prevCart.map(product => product.id === id ? {...product, quantity} : product))
  }

  function sumCosts() {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  const deleteProduct = (id) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  }

  return (
    <>
      {cart.length === 0 && (
        <div className="inter-400 checkoutEmpty">Your checkout is empty</div>
      )}
      <div className="inter-400 checkout">
        {cart.map(product => (
          <div className="checkoutCard" key={product.id}>
            <div>
              <img src={product.image}></img>
            </div>
            <div>
              <p>{product.title} <button onClick={() => deleteProduct(product.id)}>X</button></p>
              {product.price}$ x {" "}
              <input type="number" min={1} onChange={e => handleChange(product.id, e.target.value)} value={product.quantity}></input> - {product.price * product.quantity}$
            </div>
          </div>
        ))}
        {cart.length > 0 && (
        <div className="inter-400 checkoutSum"><p>Total cost: {sumCosts()}$ </p></div>
        )}
      </div>
    </>
  )
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};