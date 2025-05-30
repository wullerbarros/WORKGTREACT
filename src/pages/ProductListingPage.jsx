import { useState, useEffect } from 'react'
import Aside from "../components/Aside";
import Cards from "../components/Cards";
import tenis from "../assets/tenis.jpg"
import ResultadoCards from "../components/ResultadoCards";

const produtos = [
  {
      produto: "K-Swiss V8 - Masculino" ,
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      desconto: true,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      desconto: true,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      desconto: true,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis,
      marca: "K-Swiss",
      estado: "Novo",
      genero: "Masculino"
  },
]

const aplicacaoFiltroMarca = (produtos, marca = []) => {
  if (marca.length === 0) {
    return produtos;
  }
  return produtos.filter((produto) => marca.includes(produto.marca));
}

const aplicacaoFiltroCategoria = (produtos, categoria = []) => {
  if (categoria.length === 0) {
    return produtos;
  }
  return produtos.filter((produto) => categoria.includes(produto.categoria));
}

const aplicacaoFiltroGenero = (produtos, genero = []) => {
  if (genero.length === 0) {
    return produtos;
  }
  return produtos.filter((produto) => genero.includes(produto.genero));
}

const aplicacaoFiltroEstado = (produtos, estado ) => {
  if (estado === "" || estado === null || estado === undefined) {
    return produtos;
  }
  return produtos.filter((produto) => produto.estado === estado);
}

const ProductListingPage = () => {

  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [filtrosAtivos, setFiltrosAtivos] = useState({
    marca: [],
    categoria: [],
    genero: []
  });

  useEffect(() => {
    const filtradosPorMarca = aplicacaoFiltroMarca(produtos, filtrosAtivos.marca)
    console.log("filtradosPorMarca", filtradosPorMarca);
    const filtradosPorCategoria = aplicacaoFiltroCategoria(filtradosPorMarca, filtrosAtivos.categoria)
    console.log("filtradosPorCategoria", filtradosPorCategoria);
    const filtradosPorGenero = aplicacaoFiltroGenero(filtradosPorCategoria, filtrosAtivos.genero)
    console.log("filtradosPorGenero", filtradosPorGenero);
    const produtosFiltrados = aplicacaoFiltroEstado(filtradosPorGenero, filtrosAtivos.estado)
    console.log("produtosFiltrados", produtosFiltrados);
    setProdutosFiltrados(produtosFiltrados || []);
  }, [filtrosAtivos]);

  useEffect(() => {
    console.log("filtrosAtivos", filtrosAtivos);
  }, [filtrosAtivos]);


  return (
    <>
    <ResultadoCards />
    <div className="flex flex-col-1 bg-[#F9F8FE]">
      <Aside onFilterApply={setFiltrosAtivos} />
      <div className="pt-[56px] pl-[28px] pr-[100px]">

      <Cards quantidade={15} produtos={produtosFiltrados} />
      </div>
    </div>  
      
    </>
  );
};

export default ProductListingPage;
