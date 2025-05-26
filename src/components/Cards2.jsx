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
      preco: 110,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 120,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 130,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 140,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 140,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 140,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 150,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 160,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 160,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 170,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 180,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 10,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 10,
      img: tenis
  },{
      produto: "K-Swiss V8 - Masculino",
      categoria: "Tenis",
      preco: 190,
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

const Cards2 = ({quantidade}) => {
  console.log(quantidade)
  const newProdutos = produtos.slice(0, quantidade)
  return (
    <>
    <section className="w-full h-full p-20 bg-[#F9F8FE] ">
              <ul className="grid grid-cols-4 gap-[28px]">
                {newProdutos.map((item, index) => (
                  <li key={index} className="p-2 w-[292px] h-[439px]">
                    <div className="border border-[#ccc] bg-white rounded-[4px] border-gray-30 shadow-sm w-[292px] h-[321px] flex justify-center items-center">
                      <img src={item.img} alt={item.produto} className="max-h-[200px] object-contain" />
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

export default Cards2