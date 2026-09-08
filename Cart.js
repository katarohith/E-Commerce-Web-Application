import { useEffect, useState } from "react";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const items = JSON.parse(
      localStorage.getItem("cart")
    ) || [];

    setCartItems(items);

  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const checkout = () => {

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    setCartItems([]);

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Cart Page</h1>

      <h2>Total Items: {cartItems.length}</h2>

      <h2>Total Price: ₹{totalPrice}</h2>

      {cartItems.map((item, index) => (

        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            width: "200px"
          }}
        >

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

        </div>

      ))}

      {cartItems.length > 0 && (

        <button
          onClick={checkout}
          style={{
            padding: "10px",
            background: "black",
            color: "white",
            border: "none"
          }}
        >
          Checkout
        </button>

      )}

    </div>

  );
}

export default Cart;
