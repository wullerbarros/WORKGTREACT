
import ProductView from "../components/ProductoView";
import Cards from "../components/Cards";
import Section from "../components/Section";

const ProductViewPage = () => {
  return (
    <>
      <ProductView />
      <Section title="Produtos relacionados" link>
      <Cards quantidade={4} titulo="Produtos relacionados" />
      </Section>
    </>
  );
};

export default ProductViewPage;


