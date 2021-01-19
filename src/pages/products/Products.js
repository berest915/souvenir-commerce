import React, { useState, useEffect } from "react";
import { Wrapper, FlexItem } from "./ProductsStyle";
import { products } from "./productList";

const Products = ({ match }) => {
  const [aces, setAces] = useState([]);
 

  useEffect(() => {
    if (match.path === "/") {
      setAces(products);
    } else if (match.path === "/products/tee") {
      let updatedProducts = products.filter(product => {
        return product.category === "Tee";
      });
      setAces(updatedProducts);
    } else if (match.path === "/products/mug") {
      let updatedProducts = products.filter(product => {
        return product.category === "Mug";
      });
      setAces(updatedProducts);
    }
  }, [match.path]);

  return (
    <>
      <Wrapper>
        {aces.map(product => (
          <FlexItem key={product.id}>
            <img src={product.imgSrc} className="product-img" />
            <div className="product-div">
              <p className="product-name">{product.name}</p>
              <p className="product-category">{product.category}</p>
            </div>
          </FlexItem>
        ))}
      </Wrapper>
    </>
  );
};

export default Products;
