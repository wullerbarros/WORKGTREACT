import React from 'react';
import carrinho from '../assets/img/img-header/carrinho.svg'; 
import Logo from './Logo';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';



const Header = () => {
  return (
    <>
      <header className="bg-white !font-[inter]">
        <div className="flex justify-between items-center h-[100px] px-[100px]">
          <Logo color = "rosa"/ >
          <div className="relative flex items-center">
            <SearchBar />  
          </div>
          <div className="flex items-center gap-5 justify-between">
            <Link
              to="/Cadastro"
              className="text-[#4F4F4F] text-[16px] font-medium hover:underline cursor-pointer"
            >
              Cadastre-se
            </Link>
            <Link to="/notfound">
            <button className="bg-[#C92071] w-[114px] h-[40px] rounded-[8px] font-bold !text-[14px] !text-[#F7F7FC] !font-[inter] mt-[44px] leading-[22px] tracking-[0.75px] cursor-pointer hover:bg-[#FF69B4] transition ease-in-out duration-300">
              Entrar
            </button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/notfound">
              <img src={carrinho} alt="Carrinho de compras" className="w-[30px] h-[30px] !items-end cursor-pointer" />
            </Link>
          </div>
        </div>
        <nav className="h-[50px] items-left flex ml-[100px]">
          <ul className="flex gap-10 text-[#4F4F4F] text-[16px] font-medium items-center justify-center h-full">
            <li><Link to="/" className="hover:underline hover:text-[#C92071] cursor-pointer">Home</Link></li>
            <li><Link to="/produtos" className="hover:underline hover:text-[#C92071] cursor-pointer">Produtos</Link></li>
            <li><Link to="/notfound"className="hover:underline hover:text-[#C92071] cursor-pointer">Categorias</Link></li>
            <li><Link to="/notfound" className="hover:underline hover:text-[#C92071] cursor-pointer">Meus Pedidos</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;