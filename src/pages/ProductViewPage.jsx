import React, { useState } from 'react'
import CarouselSwiper from '../components/CarouselSwiper.jsx'
import classificacao from '../assets/img/img-ProductViewPage/Stars.svg'
import notaAvaliacao from '../assets/img/img-ProductViewPage/Group 1103.svg'
import { Link } from 'react-router-dom'

const ProductViewPage = () => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className="w-full max-w-6xl mt-8">
        <p className="text-gray-500 text-sm mb-6 mr-[10px]">
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
        </p>
        <div className="flex flex-row w-full gap-[40px]">
          {/* Coluna do carousel */}
          <div className="w-1/2 flex justify-center items-center">
            <CarouselSwiper activeIndex={activeColorIndex} />
          </div>
          {/* Coluna da descrição do produto */}
          <div className="w-1/2 flex flex-col">
            <h1 className="text-[#1F1F1F] text-[32px] !font-bold !font-[inter] leading-[36px] tracking-[1px] mt-[82px] ml-[40px] mr-[129px]">Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p className="text-[#666666] font-medium !font-[inter] text-[12px] leading-[18px] tracking-[0.5px] mt-[10px] ml-[40px] mr-[129px]">Casual | Nike | REF:38416711</p>
            <div className="flex flex-row gap-[13px] items-start">
              <img src={classificacao} alt="estrelhas de classificação" className="w-[92px] h-[14px] ml-[35px] mt-[4px]"/>
              <img src={notaAvaliacao} alt="nota de avaliação" className="w-[144px] h-[23px]" />
            </div>
            <div className='flex flex-row mt-[30px] ml-[40px]'>
              <p className='!font-[inter] text-[#474747] text-[16px] font-normal leading-[28px] tracking-[0.75px] pt-[8px]'>R$</p>
              <p className='text-[#1F1F1F] !font-[inter] !font-bold text-[32px] leading-[36px] tracking-[1px]'>219,00</p>
              <p className='!font-[inter] text-[#CCCCCC] text-[16px] font-normal leading-[28px] tracking-[0.75px] line-through ml-[10px] pt-[8px]'>299,00</p>    
            </div>
            <div className='flex flex-col gap-[5px] mt-[20px] ml-[40px] mr-[60px]'>
            <h2 className='text-[#8F8F8F] !font-[inter] text-[14px] !font-bold leading-[22px] tracking-[0.75px]'>Descrição do produto</h2>
            <p className='text-[#474747] !font-[inter] text-[14px] font-medium leading-[22px] tracking-[0.25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className='mt-[30px] ml-[40px] mr-[60px]'>
              <h3 className='!font-[inter] !font-bold text-[#8F8F8F] text-[14px] leading-[22px] tracking-[0.75px]'>Tamanho</h3>
              <div className='flex flex-row gap-[10px]'>
                <div className='w-[48px] h-[48px] rounded-[4px] border  border-[#CCCCCC] text-[#474747] !font-[inter] !font-bold text-[16px] leading-[24px] tracking-[0.75px] flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete'>39</div>
                <div className='w-[48px] h-[48px] rounded-[4px] border  border-[#CCCCCC] text-[#474747] !font-[inter] !font-bold text-[16px] leading-[24px] tracking-[0.75px] flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete'>40</div>
                <div className='w-[48px] h-[48px] rounded-[4px] border border-[#CCCCCC] bg-[#C92071] text-[#FFFFFF] !font-[inter] !font-bold text-[16px] leading-[24px] tracking-[0.75px] flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete'>41</div>
                <div className='w-[48px] h-[48px] rounded-[4px] border  border-[#CCCCCC] text-[#474747] !font-[inter] !font-bold text-[16px] leading-[24px] tracking-[0.75px] flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete'>42</div>
                <div className='w-[48px] h-[48px] rounded-[4px] border  border-[#CCCCCC] text-[#474747] !font-[inter] !font-bold text-[16px] leading-[24px] tracking-[0.75px] flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete'>43</div>
              </div>      
           </div>
           <div className='mt-[30px] ml-[40px] mr-[60px]'>
              <h3 className='!font-[inter] !font-bold text-[#8F8F8F] text-[14px] leading-[22px] tracking-[0.75px]'>Tamanho</h3>
                <div className='flex flex-row gap-[10px]'>
      {['bg-blue-100', 'bg-pink-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'].map((color, idx) => (
        <div
          key={color}
          className={`w-[31px] h-[31px] rounded-[50%] border border-gray-400/40 flex items-center justify-center hover:scale-110 cursor-pointer transition-discrete ${color} ${activeColorIndex === idx ? 'ring-2 ring-[#C92071]' : ''}`}
          onClick={() => setActiveColorIndex(idx)}
        ></div>
      ))}
    </div>      
           </div>
            {/* Adicione mais detalhes do produto aqui se quiser */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductViewPage