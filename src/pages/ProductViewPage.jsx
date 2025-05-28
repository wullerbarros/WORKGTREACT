import React from "react";
import ProductView from "../components/ProductoView";
import Cards from "../components/Cards";


const ProductViewPage = () => {
  return (
    <>
      <ProductView />
      <Cards quantidade={4} titulo="Produtos relacionados" />
    </>
  );
};

export default ProductViewPage;


