import { useState, useEffect } from 'react'
import Aside from "../components/Aside";
import Cards from "../components/Cards";
import tenis from "../assets/tenis.jpg"
import ResultadoCards from "../components/ResultadoCards";

const produtos = [
  {
    produto: "K-Swiss V8 - Feminino",
    categoria: "Corrida",
    preco: 499,
    img: tenis,
    desconto: true,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Feminino"
  },
  {
    produto: "K-Swiss V8 - Masculino",
    categoria: "Esporte e lazer",
    preco: 200,
    img: tenis,
    desconto: true,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Unisex",
    categoria: "Utilitario",
    preco: 199,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Unisex"
  },
  {
    produto: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    preco: 100,
    img: tenis,
    desconto: true,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "Adiddas V8 - Masculino",
    categoria: "Esporte e",
    preco: 199,
    img: tenis,
    marca: "Adiddas"
  },
  {
    produto: "K-Swiss V8 - Unisex",
    categoria: "Corrida",
    preco: 111,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Unisex"
  },
  {
    produto: "Puma - Masculino",
    categoria: "Utilitario",
    preco: 100,
    img: tenis,
    marca: "Puma",
    estado: "Usado",
    genero: "Masculino"
  },
  {
    produto: "Puma - Masculino",
    categoria: "Tenis",
    preco: 159,
    img: tenis,
    marca: "Puma",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Masculino",
    categoria: "Casual",
    preco: 100,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Feminino",
    categoria: "Tenis",
    preco: 79,
    img: tenis,
    marca: "Nike",
    estado: "Novo",
    genero: "Feminino"
  },
  {
    produto: "K-Swiss V8 - Dominique",
    categoria: "Utilitario",
    preco: 220,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Unisex",
    categoria: "Tenis",
    preco: 699,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Unisex"
  },
  {
    produto: "Calanciaga - Feminino",
    categoria: "Tenis",
    preco: 100,
    img: tenis,
    marca: "Calenciaga",
    estado: "Novo",
    genero: "Feminino"
  },
  {
    produto: "Calenciaga - Masculino",
    categoria: "Esporte e lazer",
    preco: 117,
    img: tenis,
    marca: "Calenciaga",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Masculino",
    categoria: "Corrida",
    preco: 80,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    preco: 99,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Masculino"
  },
  {
    produto: "K-Swiss DCS - Feminino",
    categoria: "Corrida",
    preco: 1000,
    img: tenis,
    marca: "K-Swiss",
    estado: "Novo",
    genero: "Feminino"
  },
  {
    produto: "Nike - Masculino",
    categoria: "Casual",
    preco: 399,
    img: tenis,
    marca: "Nike",
    estado: "Usado",
    genero: "Masculino"
  },
];

const aplicacaoFiltroMarca = (produtos, marca = []) => {
  if (marca.length === 0) return produtos;
  return produtos.filter(produto => marca.includes(produto.marca));
};

const aplicacaoFiltroCategoria = (produtos, categoria = []) => {
  if (categoria.length === 0) return produtos;
  return produtos.filter(produto => categoria.includes(produto.categoria));
};

const aplicacaoFiltroGenero = (produtos, genero = []) => {
  if (genero.length === 0) return produtos;
  return produtos.filter(produto => genero.includes(produto.genero));
};

const aplicacaoFiltroEstado = (produtos, estado) => {
  if (!estado) return produtos;
  return produtos.filter(produto => produto.estado === estado);
};

const ProductListingPage = () => {
  const [ordenacao, setOrdenacao] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [filtrosAtivos, setFiltrosAtivos] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: ""
  });

  useEffect(() => {
    let resultado = [...produtos];
    resultado = aplicacaoFiltroMarca(resultado, filtrosAtivos.marca);
    resultado = aplicacaoFiltroCategoria(resultado, filtrosAtivos.categoria);
    resultado = aplicacaoFiltroGenero(resultado, filtrosAtivos.genero);
    resultado = aplicacaoFiltroEstado(resultado, filtrosAtivos.estado);

    if (ordenacao === "menor_preco") {
      resultado.sort((a, b) => a.preco - b.preco);
    } else if (ordenacao === "maior_preco") {
      resultado.sort((a, b) => b.preco - a.preco);
    }

    setProdutosFiltrados(resultado);
  }, [filtrosAtivos, ordenacao]);

  return (
    <>
      <ResultadoCards
        typeProduct="Tênis"
        qtdProdutos={produtosFiltrados.length}
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
      />
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
