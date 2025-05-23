import React from 'react'
import camisaPreta from '../assets/img/img-colecaoDestaque/camisaPreta.svg'
import tenisPreto from '../assets/img/img-colecaoDestaque/tenisPreto.svg'
import fone from '../assets/img/img-colecaoDestaque/fone.svg'
import calcaTracada from '../assets/img/img-colecaoDestaque/calcaTraçada.svg'
import camisaTracada from '../assets/img/img-colecaoDestaque/camisaTraçada.svg'
import tenisTracado from '../assets/img/img-colecaoDestaque/tenisTraçado.svg'
import foneTracado from '../assets/img/img-colecaoDestaque/foneTraçado.svg'

function Destaque () {
    const destaqueCardsData = [
    {
        desconto: '30% OFF',
        titulo: 'Novo drop supreme',
        imagemSrc: camisaPreta,
        altImagem: 'camiseta preta',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Coleção Adidas',
        imagemSrc: tenisPreto,
        altImagem: 'imagem de um tênis branco com detalhes pretos',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Novo Beats Bass',
        imagemSrc: fone,
        altImagem: 'imagem de fone de ouvido, modelo Supra-auricular',
        textoBotao: 'Comprar'
    }]
    
    const colecaoDestaque = [
    {
        imagemSrc: camisaTracada,
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Camisetas"
    },
    {
        imagemSrc: calcaTracada,
        altImagem: "imagem de um traço de uma calça",
        titulo: "Calças"
    },
    {
        imagemSrc: calcaTracada,
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Bonés"
    },
    {
        imagemSrc: foneTracado,
        altImagem: "imagem de um traço de um heaphone",
        titulo: "Headphones"
    },
    {
        imagemSrc: tenisTracado,
        altImagem: "imagem de um traço de um tenis",
        titulo: "Tênis"
    }    
];

  return (
    <>
    {/* // colecao em destaque 1 */}
    <h2 className='ml-[100px] pt-[38px] text-[24px] text-[#474747] !font-bold !leading-[38px] !font-[inter]'>Coleções em destaque</h2>
    <div className='flex flex-row gap-[12px] mt-[20px] ml-[100px]'>
        {destaqueCardsData.map((cardData, index) => (
            <div
            key={index}
            className="bg-[#D8E3F2] !font-[inter] !w-[405px] !h-[251px] rounded-[8px] flex flex-col items-center justify-center relative"
            >
                <p className="bg-[#E7FF86] h-[32px] w-[96px] text-center flex items-center justify-center rounded-[29px] text-[14px] mt-[34px] mb-[185px] mr-[279px] ml-[30px] font-bold text-[#474747]">
                    {cardData.desconto}
                </p>
                <h2 className="!font-bold text-[32px] !font-[inter] !leading-[36px] w-[172px] h-[72px] text-[#1F1F1F] mt-[76px] mb-[76px] mr-[203px] ml-[30px]">
                    {cardData.titulo}
                </h2>
                <img
                    src={cardData.imagemSrc}
                    alt={cardData.altImagem}
                    className="w-[242px] h-[251px] transform translate-x-[80px] translate-y-[0px] absolute z-0"
                />
                <button className="bg-white z-10 hover:bg-[#E7FF86] cursor-pointer !w-[153px] !h-[48px] rounded-[8px] !mr-[190px] !font-bold !text-[#C92071]">
                    {cardData.textoBotao}
                </button>
            </div>
        ))}
    </div>
    {/* // colecao em destaque 2 */}
    <h2 className='justify-center text-center pt-[100px] text-[24px] text-[#474747] !font-bold !leading-[38px] !font-[inter]'>Coleções em destaque</h2>
    <div className="flex gap-4 flex-wrap justify-center mt-[20px]"> 
    {colecaoDestaque.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center gap-[10px]">
        <div className="bg-white w-[104px] h-[104px] p-[20px] rounded-[150px] flex items-center justify-center">
          <img
            src={item.imagemSrc}
            alt={item.altImagem}
            className="w-[64px] h-[63.92px] hover:scale-110 hover:fill-pink-500 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div>
          <h2 className="!font-[inter] !font-bold text-[14px] text-[#474747] hover:text-[#C92071] transition-colors duration-300">
            {item.titulo}
          </h2>
        </div>
      </div>
    ))}
    </div>
    </>
  )
}
export default Destaque