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
  },
]


const Cards = ({quantidade}) => {
  console.log(quantidade)
  const newProdutos = produtos.slice(0, quantidade)
  return (
    <>
    <section className="ml-[100px] mr-[150px] p-20 bg-[#F9F8FE] ">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl mb-5 text-gray-600">Produtos em alta</h1>
                <a className="text-xs text-red-500 mr-10">Ver todos →</a>
            </div>
              <ul className="flex flex-wrap gap-[24px] ">
                {newProdutos.map((item)=>(
                    <li className=" p-2 w-[292px] h-[439]">
                        <div className="border border-[#ccc] bg-white  rounded-[4px] p-5 border-gray-30 shadow-sm w-[292px] h-[321]">
                            <img src={item.img} alt={item.produto} />
                        </div>
                        <div>
                            <h2 className='text-xs text-gray-500 font-sans'>{item.categoria}</h2>
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