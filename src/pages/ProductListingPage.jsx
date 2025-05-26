import { useEffect, useState } from 'react';
import ResultadoCards from '../components/ResultadoCards';
import FilterGroup from '../components/FilterGroup';

const produtosExemplo = [
  { nome: "Tênis A", marca: "Adiddas", categoria: "Esporte e lazer", genero: "Masculino", estado: "Novo" },
  { nome: "Tênis B", marca: "Nike", categoria: "Casual", genero: "Feminino", estado: "Usado" },
  { nome: "Tênis C", marca: "Puma", categoria: "Corrida", genero: "Unisex", estado: "Novo" },
];

const ProductListingPage = (props) => {
  const [ordenacao, setOrdenacao] = useState('');

  const produtosOrdenados = [].sort((a, b) => {
    if (ordenacao === 'menor_preco') {
      return a.preco - b.preco;
    } else if (ordenacao === 'maior_preco') {
      return b.preco - a.preco;
    }
    return 0;
  });

  return (
    <>
       <ResultadoCards typeProduct="Tenis" qtdProdutos="10"/>
    </>


  );
};
export default ProductListingPage