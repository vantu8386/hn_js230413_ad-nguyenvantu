import React, { useState } from "react";
import "./Card.css";

export default function Card({ cartItems }) {
  const [items, setItems] = useState(cartItems);

  const handleDelete = (index) => {
    const newCartItems = [...items];
    newCartItems.splice(index, 1);
  
    setItems(newCartItems);
  };

  let totalAmount = 0;

  const handleQuantityChange = (index, event) => {
    const newCartItems = [...items];
    newCartItems[index].quantity = event.target.value;

    // Cập nhật lại tổng số tiền
    totalAmount = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    setItems(newCartItems);
  };

  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const itemTotal = item.quantity * item.price; // Tính tổng số tiền cho mỗi mục
            totalAmount += itemTotal; // Cộng tổng số tiền của mục này vào tổng số tiền chung

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="name">{item.name}</td>
                <td>
                  <img src={item.image_url} alt={item.name} />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(index, event)} // Gọi hàm xử lý sự kiện khi thay đổi số lượng
                  />
                </td>
                <td>{item.price} $</td>
                <td>{itemTotal} $</td>
                <td>
                  <button className="update">Update</button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h1>Tổng tiền: {totalAmount} $</h1> {/* Hiển thị tổng số tiền */}
      </div>
    </div>
  );
}
