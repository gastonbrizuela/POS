import React from "react";

/* Custom Components */
import ProductsList from "./ProductsList";

const ProductsListContainer = ({ products }) => {
  return <ProductsList products={products} />;
};

export default ProductsListContainer;
