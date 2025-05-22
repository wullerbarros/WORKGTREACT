import React from 'react';
import CadastroForm from '../components/CadastroForm'; //
import tenisLogin from '../assets/img/img-header/loginTenis-CeD1OzqT.svg'


function CadastroPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-400 to-blue-50">
      {/* Coluna do Formulário */}
      <div className="flex-1 flex rounded-[4px] w-[583px] h-[399px] mt-[120px] ml-[100px]">
        
        <CadastroForm />
      </div>
      {/* Coluna da Imagem */}
      <div
        className="hidden md:flex flex-1 mt-[66px] mr-[150px] rounded-[4px] bg-cover bg-center text-white text-4xl text-center p-8"
        >
        {/* Substitua pela sua imagem ou adicione um overlay */}
        <img className='w-full h-full' src={tenisLogin} alt="tenis amarelo" />
      </div>     
    </div>
  );
}

export default CadastroPage;