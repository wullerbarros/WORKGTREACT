import Aside from "../components/Aside";
import Cards from "../components/Cards";
import ResultadoCards from "../components/ResultadoCards";


const ProductListingPage = () => {
  return (
    <>
    <ResultadoCards />
    <div className="flex flex-col-1 bg-[#F9F8FE]">
      <Aside />
      <Cards quantidade={15} className="ml-[0]" />
    </div>  
      
    </>
  );
};

export default ProductListingPage;
