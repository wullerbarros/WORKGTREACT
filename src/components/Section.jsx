import React from 'react'

function Section () {
    const destaqueCardsData = [
    {
        desconto: '30% OFF',
        titulo: 'Novo drop supreme',
        imagemSrc: '../assets/img/img-colecaoDestaque/camisaPreta.svg',
        altImagem: 'camiseta preta',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Coleção Adidas',
        imagemSrc: '../assets/img/img-colecaoDestaque/tenisPreto.svg',
        altImagem: 'imagem de um tênis branco com detalhes pretos',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Novo Beats Bass',
        imagemSrc: '../assets/img/img-colecaoDestaque/fone.svg',
        altImagem: 'imagem de fone de ouvido, modelo Supra-auricular',
        textoBotao: 'Comprar'
    }
];
  return (
    <>
    <h2>Coleções em destaque</h2>
    <div className='flex flex-row gap-[12px] justify-center mt-[96px]'>
        {destaqueCardsData.map((cardData, index) => (
            <div
            key={index}
            className="bg-[#D8E3F2] w-[405px] h-[251px] rounded-[8px] flex flex-col items-center justify-center relative"
            >
                <p className="bg-[#E7FF86] h-[32px] w-[96px] text-center flex items-center justify-center rounded-[29px] text-[14px] mt-[34px] mb-[185px] mr-[279px] ml-[30px] font-bold text-[#474747]">
                    {cardData.desconto}
                </p>
                <h2 className="font-bold text-[32px] !font-[inter] leading-[36px] w-[172px] h-[72px] text-[#1F1F1F] absolute mt-[76px] mb-[76px] mr-[203px] ml-[30px]">
                    {cardData.titulo}
                </h2>
                <img
                    src={cardData.imagemSrc}
                    alt={cardData.altImagem}
                    className="w-[242px] h-[251px] transform translate-x-[80px] translate-y-[0px] absolute"
                />
                <button className="bg-white hover:bg-[#E7FF86] cursor-pointer w-[153px] h-[48px] rounded-[8px] absolute mr-[222px] ml-[30px] mt-[168px] mb-[35px] font-bold text-[#C92071]">
                    {cardData.textoBotao}
                </button>
            </div>
        ))}
    </div>
    </>
  )
}
export default Section