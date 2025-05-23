import { useState } from "react";
import FilterSection from "./FilterSection";

const FilterGroup = ({ onApply }) => {
  const [filters, setFilters] = useState({
    marca: ["Adiddas", "K-Swiss"],
    categoria: ["Esporte e lazer"],
    genero: ["Masculino", "Feminino"],
    estado: "Novo",
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
    <div className="p-[30px] border w-[308px] bg-white fixed left-0 top-0 h-full shadow-xl z-10 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-semibold">Filtrar por</h2>
        <button className="text-xl">×</button>
      </div>
      <hr className="mb-4" />

      <FilterSection title="Marca" options={marcas} selected={filters.marca} onToggle={(val) => toggleCheckbox("marca", val)} />
      <FilterSection title="Categoria" options={categorias} selected={filters.categoria} onToggle={(val) => toggleCheckbox("categoria", val)} />
      <FilterSection title="Gênero" options={generos} selected={filters.genero} onToggle={(val) => toggleCheckbox("genero", val)} />

      <div className="mb-4">
        <h3 className="font-medium mb-1">Estado</h3>
        {estados.map((estado) => (
          <label key={estado} className="flex items-center space-x-2 mb-1">
            <input
              type="radio"
              name="estado"
              value={estado}
              checked={filters.estado === estado}
              onChange={() => handleRadioChange(estado)}
              className="accent-[#991956] w-6 h-6"
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

// udbsdub

export default FilterGroup;