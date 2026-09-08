import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/products")
      .then((res) => {

        setProducts(res.data);

      });

    const savedCart = JSON.parse(
      localStorage.getItem("cart")
    ) || [];

    setCart(savedCart);

  }, []);

  const addToCart = (product) => {

    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>E-Commerce Store</h1>

      <h2>Cart Items: {cart.length}</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {products.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "200px"
            }}
          >

            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Home;
