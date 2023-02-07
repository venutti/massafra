import { useState } from "react";
import Container from "./Container";
import MenuCategory from "./MenuCategory";

import db from "../db.json";

export default function Menu() {
  const [products, setProducts] = useState(db.products);

  return (
    <div className="menu" id="menu">
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
