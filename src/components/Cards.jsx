import React from 'react'
import tenis from "../assets/tenis.jpg"



const produtos = [
  {
      produto: "K-Swiss V8 - Masculino" ,
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 100,
      img: tenis
  },
]


const Cards = ({quantidade, titulo}) => {
  console.log(quantidade)
  const newProdutos = produtos.slice(0, quantidade)
  return (
    <>
    <section className="bg-[#F9F8FE] pt-[123px]">
            { titulo && <div className="flex justify-between items-center mb-[20px]">
                <h1 className=" ml-[100px] text-[24px] text-[#474747] !font-bold !leading-[38px] !font-[inter]">{titulo}</h1>
                <a className=" text-red-500 text-[18px] mr-[85px]">Ver todos →</a>
            </div>}
            <ul className="flex flex-wrap gap-[24px] ml-[100px] pb-[120px]">
                {newProdutos.map((item)=>(
                    <li className="">
                        <div className=" bg-white rounded-[4px] border-gray-30 shadow-sm w-[272px] h-[301px] ">
                            <img src={item.img} alt={item.produto} />
                        </div>
                        <div>
                            <h2 className='text-[12px] text-gray-500 font-sans'>{item.categoria}</h2>
                            <h2 className="text-gray-700 font-sans font-inter text-[24px]">{item.produto}</h2>
                            <p className='font-inter font-bold text-[24px]'>${item.preco}</p>
                        </div>
                    </li>
                ))}
            </ul>
    </section>
    </>
  )
}

export default Cards