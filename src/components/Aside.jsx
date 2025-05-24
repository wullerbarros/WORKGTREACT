// import App from '../App.css'
import { useState } from 'react'
import FilterGroup from './FilterGroup.jsx'

const produtosExemplo = [
  { nome: "Tênis A", marca: "Adiddas", categoria: "Esporte e lazer", genero: "Masculino", estado: "Novo" },
  { nome: "Tênis B", marca: "Nike", categoria: "Casual", genero: "Feminino", estado: "Usado" },
  { nome: "Tênis C", marca: "Puma", categoria: "Corrida", genero: "Unisex", estado: "Novo" },
];

const Aside = () => {
  const [filtrosAtivos, setFiltrosAtivos] = useState(null);

  const produtosFiltrados = filtrosAtivos
    ? produtosExemplo.filter((produto) =>
        filtrosAtivos.marca.includes(produto.marca) &&
        filtrosAtivos.categoria.includes(produto.categoria) &&
        filtrosAtivos.genero.includes(produto.genero) &&
        produto.estado === filtrosAtivos.estado
      )
    : produtosExemplo;

  return (
    <div className="flex">
      <FilterGroup onApply={setFiltrosAtivos} />
      <div className="ml-[320px] p-6 w-full">
        <h1 className="text-xl font-bold mb-4 text-[#991956]">Produtos</h1>
        <ul>
          {produtosFiltrados.map((produto, idx) => (
            <li key={idx} className="border p-2 mb-2 rounded">
              {produto.nome} - {produto.marca} - {produto.categoria} - {produto.genero} - {produto.estado}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside
