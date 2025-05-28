import React from "react";
import ProductView from "../components/ProductoView";
import Cards from "../components/Cards";


const ProductViewPage = () => {
  return (
    <>
      <ProductView />
      <Cards quantidade={4} className="bg-[#F9F8FE] flex ml-[100px] mr-[100px]"/>
    </>
  );
};

export default ProductViewPage;
