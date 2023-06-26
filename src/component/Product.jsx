import React, { useState } from "react";
import "./Product.css";

export default function Product(props) {
  const { name, price, description, image_url, cartItems, setCartItems } = props;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const newCartItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      image_url: props.image_url,
      quantity: quantity,
    };

    setCartItems([...cartItems, newCartItem]);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="product">
      <div>
        <div>
          <img src={image_url} alt="" />
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <p className="price">{price} $</p>
        </div>
        <div className="addTocard">
          <input
            className="number"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
          <button className="btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
