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
}
]


const Cards = () => {
  return (
    <>
    <section className="ml-[100px]">
            <h1 className="font-bold text-2xl mb-5">Produtos Relacionados</h1>
              <ul className="flex flex-wrap gap-[24px]">
                {produtos.map((item)=>(
                    <li className="border border-[#ccc] p-2">
                        <div className="bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm">
                            <img src={item.img} alt={item.produto} />
                        </div>
                        <div>
                            <h2>{item.categoria}</h2>
                            <h2 className="text-xs">{item.produto}</h2>
                            <p>{item.preco}</p>
                        </div>
                    </li>
                ))}
            </ul>
    </section>
    </>
  )
}

export default Cards