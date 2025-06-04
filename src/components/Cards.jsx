import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({quantidade, produtos}) => {
console.log(quantidade)
console.log(produtos)
const newProdutos = produtos.slice(0, quantidade)
return (
<>
        <ul className="flex flex-wrap justify-between w-full">
        {newProdutos.map((item)=>( <Link to='/product/:id'>                    
            <li className="">
            <div className=" bg-white rounded-[4px] border-gray-30 shadow-sm w-[272px] h-[301px] relative">
            <img src={item.img} alt={item.produto} className='hover:translate-y-[-10px]'/>
            {item.desconto && <div className='absolute top-5 left-3 text-xs font-bold font-inter bg-[#E7FF86] px-2 p-1 rounded-[29px]'>
            <span>30% OFF</span>
            </div>}
            </div>
        <div>
        <h2 className='text-[12px] text-gray-500 font-sans'>{item.categoria}</h2>
        <h2 className="text-gray-700 font-sans font-inter text-[24px]">{item.produto}</h2>
        <p className='font-inter font-bold text-[24px]'>${item.preco}</p>
        </div>
        </li>
        </Link>
    ))}
        </ul>
    </>
)
}

export default Cards