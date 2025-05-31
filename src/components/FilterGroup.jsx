import { useState } from "react";
import FilterSection from "./FilterSection";

const FilterGroup = ({ onApply }) => {
  const [filters, setFilters] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: "",
  });

  const marcas = ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
  const categorias = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
  const generos = ["Masculino", "Feminino", "Unisex"];
  const estados = ["Novo", "Usado"];

  const toggleCheckbox = (type, value) => {
    setFilters((prev) => {
      const list = prev[type];
      if (list.includes(value)) {
        return { ...prev, [type]: list.filter((item) => item !== value) };
      } else {
        return { ...prev, [type]: [...list, value] };
      }
    });
  };

  const handleRadioChange = (value) => {
    setFilters((prev) => ({ ...prev, estado: value }));
  };

  const applyFilters = () => {
    onApply(filters);
  };

  return (
    <div className="pt-[56px] pl-[100px] relative">
      <div className="bg-[#FFFFFF] p-[30px] w-[308px] h-[800px] ">
        <div className="text-white flex justify-between items-center mb-2 font-bold">
          <h2 className="text-[#474747] text-base w-[85px] h-[24px] !font-bold !font-[inter] tracking-[0.75px] mb-4">Filtrar por</h2>
        </div>
        <hr className="w-[248px] border-[1px] content-center border-[#CCCCCC]"/>

        <FilterSection title="Marca" options={marcas} selected={filters.marca} onToggle={(val) => toggleCheckbox("marca", val)} />
        <FilterSection title="Categoria" options={categorias} selected={filters.categoria} onToggle={(val) => toggleCheckbox("categoria", val)} />
        <FilterSection title="Gênero" options={generos} selected={filters.genero} onToggle={(val) => toggleCheckbox("genero", val)} />

        <div className="mb-4 w-[76px] h-[100px]">
          <h3 className="text-sm text-[#474747] !font-[inter] !font-bold w-[52px] h-[22px] mb-1 tracking-[0.75px]">Estado</h3>
          {estados.map((estado) => (
            <label key={estado} className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                name="estado"
                value={estado}
                checked={filters.estado === estado}
                onChange={() => handleRadioChange(estado)}
                className="accent-[#C92071] w-[22px] h-[14px] t-[4px] l-[4px] gap-0.5"
              />
              <span className="!font-[inter] tracking-[0.25px] text-sm text-[#474747] ml-[12px]">{estado}</span>
            </label>
          ))}
          <button onClick={applyFilters} className="w-[220px] font-bold h-[48px] rounded-[8px] bg-gray-200 !text-[#474747] !font-[inter] text-[14px] leading-[24px] tracking-[0.75px] !mt-[20px] !ml-[10px] hover:bg-[#C92071] !hover:text-[#f5f5f5] transition duration-300 ease-in-out cursor-pointer">
          Aplicar filtros
        </button>
        </div>
      </div>
    </div>
  );
};




export default FilterGroup;