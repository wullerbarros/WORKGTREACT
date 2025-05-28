import React from "react";
import ProductView from "../components/ProductoView";
import Cards from "../components/Cards";


const ProductViewPage = () => {
  return (
    <>
      <ProductView />
      <Cards quantidade={4} />
    </>
  );
};

export default ProductViewPage;


