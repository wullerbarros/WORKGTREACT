import React from 'react'

function BodyJ() {
  const colecaoDestaque = [
    {
        imagemSrc: '../assets/img/img-colecaoDestaque/camisaPreta.svg',
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Camisetas"
    },
    {
        imagemSrc: './img-colecaoDestaque/calça.svg',
        altImagem: "imagem de um traço de uma calça",
        titulo: "Calças"
    },
    {
        imagemSrc: './img-colecaoDestaque/calça.svg',
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Bonés"
    },
    {
        imagemSrc: './img-colecaoDestaque/Group.svg',
        altImagem: "imagem de um traço de um heaphone",
        titulo: "Headphones"
    },
    {
        imagemSrc: './img-colecaoDestaque/tenis.svg',
        altImagem: "imagem de um traço de um tenis",
        titulo: "Tênis"
    }
];

return (
  <div className="flex gap-4 flex-wrap">
    {colecaoDestaque.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center gap-[10px]">
        <div className="bg-white w-[104px] h-[104px] p-[20px] rounded-[150px] flex items-center justify-center">
          <img
            src={item.imagemSrc}
            alt={item.altImagem}
            className="w-[64px] h-[63.92px] hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div>
          <h2 className="font-[inter] font-bold text-[14px] text-[#474747] hover:text-[#C92071] transition-colors duration-300">
            {item.titulo}
          </h2>
        </div>
      </div>
    ))}
  </div>
);

}

export default BodyJ