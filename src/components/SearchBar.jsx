import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Lista estática de produtos
const products = [
  { id: 1, name: "Tênis Nike Air Max", description: "Tênis confortável para corrida." },
  { id: 2, name: "Tênis Adidas Ultraboost", description: "Tenis de corrida com design moderno." },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const location = useLocation();

  // Limpa busca ao mudar de rota
  useEffect(() => { 
    setSearchTerm(""); 
    setFilteredProducts([]); 
  }, [location.pathname]);

  // Função para lidar com a entrada do usuário
  const handleSearch = (event) => { 
    const term = event.target.value; 
    setSearchTerm(term); 

    // Filtra produtos com base no texto digitado
    if (term.trim() === "") { 
      setFilteredProducts([]); 
      return; // <-- Adicione este return!
    }

    const filtered = products.filter((product) => 
      product.name.toLowerCase().includes(term.toLowerCase()) 
    );
    setFilteredProducts(filtered); 
  };

  return (
    <div className="relative flex items-center w-[559px]">
      <input 
        type="text"
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Pesquisar produto..."
        className="bg-gray-100 w-full h-[60px] pr-10 pl-3 rounded-md text-gray-700 font-inter focus:outline-none focus:ring-2 focus:ring-[#C92071]"
      />
      <button className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 cursor-pointer" />
      </button>
      {filteredProducts.length > 0 && (
        <ul className="absolute z-10 w-full mt-[60px] bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => ( 
            <li
              key={product.id} //significa que vai mostrar os produtos
              className="px-4 py-2 text-gray-700 font-inter hover:bg-gray-100 cursor-pointer"
            >
              <Link
                to={`/produtos/`}
                onClick={() => setSearchTerm("")} 
                className="block w-full"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
