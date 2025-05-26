import './App.css'
import { useState } from 'react'
import FilterGroup from "./components/FilterGroup";
import ProductListingPage from './pages/ProductListingPage';

const produtosExemplo = [
  { nome: "Tênis A", marca: "Adiddas", categoria: "Esporte e lazer", genero: "Masculino", estado: "Novo" },
  { nome: "Tênis B", marca: "Nike", categoria: "Casual", genero: "Feminino", estado: "Usado" },
  { nome: "Tênis C", marca: "Puma", categoria: "Corrida", genero: "Unisex", estado: "Novo" },
];

const App = () => {
  const [filtrosAtivos, setFiltrosAtivos] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: ""
  });

  // Filtrar produtos baseado nos filtrosAtivos
  const produtosFiltrados = produtosExemplo.filter((produto) => {
    const marcaMatch = filtrosAtivos.marca.length === 0 || filtrosAtivos.marca.includes(produto.marca);
    const categoriaMatch = filtrosAtivos.categoria.length === 0 || filtrosAtivos.categoria.includes(produto.categoria);
    const generoMatch = filtrosAtivos.genero.length === 0 || filtrosAtivos.genero.includes(produto.genero);
    const estadoMatch = !filtrosAtivos.estado || produto.estado === filtrosAtivos.estado;

    return marcaMatch && categoriaMatch && generoMatch && estadoMatch;
  });

  return (
    <div className="min-h-screen">
      <div className="p-6 w-full">
        <ProductListingPage produtos={produtosFiltrados} />
      </div>
      <FilterGroup onApply={setFiltrosAtivos} />

    </div>
  );
};




export default App
