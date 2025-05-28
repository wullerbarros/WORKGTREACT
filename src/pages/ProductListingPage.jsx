import React from "react";
import Aside from "../components/Aside";
import Cards from "../components/Cards";


const ProductListingPage = () => {
  return (
    <>
    <div className="flex flex-col-1 bg-[#F9F8FE] pt-[58px] gap-[28px]">
      <Aside />
      <Cards quantidade={15} className="ml-[0]" />
    </div>  
      
    </>
  );
};

export default ProductListingPage;
