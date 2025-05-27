import { useState } from "react";
import FilterSection from "./FilterSection";

const FilterGroup = ({ onApply }) => {
  const [filters, setFilters] = useState({
    marca: ["", ""],
    categoria: [""],
    genero: ["", ""],
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
    <div className="bg-[#FFFFFF] p-[30px] w-[308px]  ml-[100px] left-0 top-0 h-[720px]  z-10">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base w-[85px] h-[24px] font-bold leading-6 tracking-tight font-inter mb-4">Filtrar por</h2>
      </div>
      <hr className="w-[248px] border border-[#CCCCCC]"/>

      <FilterSection title="Marca" options={marcas} selected={filters.marca} onToggle={(val) => toggleCheckbox("marca", val)} />
      <FilterSection title="Categoria" options={categorias} selected={filters.categoria} onToggle={(val) => toggleCheckbox("categoria", val)} />
      <FilterSection title="Gênero" options={generos} selected={filters.genero} onToggle={(val) => toggleCheckbox("genero", val)} />

      <div className="mb-4 w-[76px] h-[86px]">
        <h3 className="w-[52px] h-[22px] font-medium mb-1">Estado</h3>
        {estados.map((estado) => (
          <label key={estado} className="flex items-center space-x-2 mb-1">
            <input
              type="radio"
              name="estado"
              value={estado}
              checked={filters.estado === estado}
              onChange={() => handleRadioChange(estado)}
              className="accent-[#C92071] w-[22px] h-[14px] t-[4px] l-[4px]"
            />
            <span>{estado}</span>
          </label>
        ))}
      </div>

      <button onClick={applyFilters} className="bg-[#991956] text-white px-4 py-2 rounded-lg w-full mt-4">
        Aplicar filtros
      </button>
    </div>
  );
};

export default FilterGroup;