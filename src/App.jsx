import './App.css'
import FilterGroup from './components/FilterGroup';
import FilterPanel from './components/FilterGroup'
import { useState } from 'react'


const produtosExemplo = [
  { nome: "Tênis A", marca: "Adiddas", categoria: "Esporte e lazer", genero: "Masculino", estado: "Novo" },
  { nome: "Tênis B", marca: "Nike", categoria: "Casual", genero: "Feminino", estado: "Usado" },
  // ...mais produtos
];

const App = () => {
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
      <div className="w-[308px] h-[720px] mt- [332px] left-[100px] rounded-sm gap-20">
        <h1 className="text-xl font-bold mb-4 [#991956]">Produtos</h1>
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



export default App
