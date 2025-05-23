import React from 'react';
import carrinho from '../assets/img/img-header/carrinho.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-white !font-[inter]">
      <div className="flex justify-between items-center h-[100px] px-10">
        <Logo color = "rosa"/ >
        <div className="relative flex items-center">
          <input
            type="text"
            className="bg-gray-100 w-[559px] h-[60px] pr-10 pl-3 rounded-md"
            placeholder="Pesquisar produto..."
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 cursor-pointer" />
          </button>
        </div>
        <div className="flex items-center gap-5">
          <Link
            to="/Cadastro"
            className="text-[#4F4F4F] text-[16px] font-medium hover:underline cursor-pointer"
          >
            Cadastre-se
          </Link>
          <button className="bg-[#C92071] w-[114px] h-[40px] rounded-[8px] font-bold !text-[14px] !text-[#F7F7FC] !font-[inter] mt-[44px] leading-[22px] tracking-[0.75px] cursor-pointer hover:bg-[#FF69B4] transition ease-in-out duration-300">
            Entrar
          </button>
        </div>
        <div className="flex items-center">
          <img src={carrinho} alt="Carrinho de compras" className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
      <nav className="h-[50px] items-left flex">
        <ul className="flex gap-10 text-[#4F4F4F] text-[16px] font-medium items-center justify-center h-full mx-[40px]">
          <li>
            <Link to="/"className="hover:underline hover:text-[#C92071] cursor-pointer">Home</Link>
            </li>
          <li>
            <Link to="/produtos" className="hover:underline hover:text-[#C92071] cursor-pointer">Produtos
            </Link></li>
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Categorias</li>
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Meus Pedidos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;