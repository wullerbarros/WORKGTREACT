import Aside from "../components/Aside";
import Cards from "../components/Cards";
import ResultadoCards from "../components/ResultadoCards";


const ProductListingPage = () => {
  return (
    <>
    <ResultadoCards />
    <div className="flex flex-col-1 bg-[#F9F8FE]">
      <Aside />
      <div className="pt-[56px] pl-[28px] pr-[100px]">
      <Cards quantidade={15} />
      </div>
    </div>  
      
    </>
  );
};

export default ProductListingPage;
