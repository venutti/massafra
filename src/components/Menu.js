import axios from "axios";
import { useEffect, useState } from "react";
import Container from "./Container";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");

    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="menu">
      <Container>
        <h2 className="title">
          MENU <hr />
        </h2>
        {products.map((product, index) => (
          <MenuCategory
            key={index}
            category={product.category}
            description={product.description}
            sections={product.sections}
          />
        ))}
      </Container>
    </div>
  );
}
