import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsPage = (props) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://60682ee10add49001733fc41.mockapi.io/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <button>Add New Product</button>
    </div>
  );
};

export default ProductsPage;
