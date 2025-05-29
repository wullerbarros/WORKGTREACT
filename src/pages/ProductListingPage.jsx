import Aside from "../components/Aside";
import Cards from "../components/Cards";
import ResultadoCards from "../components/ResultadoCards";
import Section from "../components/Section";


const ProductListingPage = () => {
  return (
    <>
    <ResultadoCards />
    <div className="flex flex-col-1 bg-[#F9F8FE]">
      <Aside />
      <Section title="">
      <Cards quantidade={15} className="ml-[0]" />
      </Section>
    </div>  
      
    </>
  );
};

export default ProductListingPage;
