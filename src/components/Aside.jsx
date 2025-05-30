// import App from '../App.css'
import FilterGroup from './FilterGroup.jsx'

const Aside = ({ onFilterApply }) => {

  return (
    <div className="flex">
      <FilterGroup onApply={onFilterApply} />
      {/* <div className="ml-[320px] p-6 w-full">
        <h1 className="text-xl font-bold mb-4 text-[#991956]">Produtos</h1>
        <ul>
          {produtosFiltrados.map((produto, idx) => (
            <li key={idx} className="border p-2 mb-2 rounded">
              {produto.nome} - {produto.marca} - {produto.categoria} - {produto.genero} - {produto.estado}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Aside
