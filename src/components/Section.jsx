import React from 'react'
import camisaPreta from '../assets/img/img-colecaoDestaque/camisaPreta.svg'
import tenisPreto from '../assets/img/img-colecaoDestaque/tenisPreto.svg'
import fone from '../assets/img/img-colecaoDestaque/fone.svg'

function Section () {
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
    }
];
  return (
    <>
    <h2 className='ml-[60px] pt-[38px] text-[24px] text-[#474747] !font-bold leading-[38px] !font-[inter]'>Coleções em destaque</h2>
    <div className='flex flex-row gap-[12px] mt-[20px] ml-[60px]'>
        {destaqueCardsData.map((cardData, index) => (
            <div
            key={index}
            className="bg-[#D8E3F2] !font-[inter] !w-[405px] !h-[251px] rounded-[8px] flex flex-col items-center justify-center relative"
            >
                <p className="bg-[#E7FF86] h-[32px] w-[96px] text-center flex items-center justify-center rounded-[29px] text-[14px] mt-[34px] mb-[185px] mr-[279px] ml-[30px] font-bold text-[#474747]">
                    {cardData.desconto}
                </p>
                <h2 className="!font-bold text-[32px] !font-[inter] leading-[36px] w-[172px] h-[72px] text-[#1F1F1F] mt-[76px] mb-[76px] mr-[203px] ml-[30px]">
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
    </>
  )
}
export default Section