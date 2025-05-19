import React from "react";

let Product = (props) => {
  let { name, price } = props;
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#E83F25",
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        width: 400,
        alignItems: "left",
        justifyContent: "space-evenly",
        // gap: "20px",

        textAlign: "left",
      }}
    >
      <h2>Product name : {name}</h2>
      <br />
      <img src="../shopping.webp" alt="" style={{ width: 400 }} />
      <br />
      <h2>Price of product : Rs.{price}</h2>
    </div>
  );
};

export default Product;
