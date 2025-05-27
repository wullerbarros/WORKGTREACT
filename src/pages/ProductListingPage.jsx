import React from "react";
import Aside from "../components/Aside";
import Cards from "../components/Cards";


const ProductListingPage = () => {
  return (
    <>
      <Aside />
      <Cards quantidade={15}/>
    </>
  );
};

export default ProductListingPage;
