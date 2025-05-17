import React from 'react';
import carrinho from '../assets/img/img-header/carrinho.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';


const Header = () => {
  return (
    <header className="bg-white !font-[inter]">
      <div className="flex justify-between items-center h-[80px] px-10">
        <Logo / >
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
          <a href="#" className="text-[#4F4F4F] text-[16px] font-medium hover:underline cursor-pointer">
            Cadastre-se
          </a>
          <button className="bg-[#C92071] w-[114px] h-[40px] rounded-[8px] font-bold font-inter text-[14px] text-[#F7F7FC] cursor-pointer hover:bg-[#FF89D7]">
            Entrar
          </button>
        </div>
        <div className="flex items-center">
          <img src={carrinho} alt="Carrinho de compras" className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
      <nav className="h-[50px] items-left flex">
        <ul className="flex gap-10 text-[#4F4F4F] text-[16px] font-medium items-center justify-center h-full mx-[40px]">
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Home</li>
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Produtos</li>
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Categorias</li>
          <li className="hover:underline hover:text-[#C92071] cursor-pointer">Meus Pedidos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;