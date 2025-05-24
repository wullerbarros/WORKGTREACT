import React from 'react'
import CarouselSwiper from '../components/CarouselSwiper.jsx'
import classificacao from '../assets/img/img-ProductViewPage/Stars.svg'
import notaAvaliacao from '../assets/img/img-ProductViewPage/Group 1103.svg'
import { Link } from 'react-router-dom'

const ProductViewPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className="w-full max-w-6xl mt-8">
        <p className="text-gray-500 text-sm mb-6">
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
        </p>
        <div className="flex flex-row w-full gap-[40px]">
          {/* Coluna do carousel */}
          <div className="w-1/2 flex justify-center items-center">
            <CarouselSwiper />
          </div>
          {/* Coluna da descrição do produto */}
          <div className="w-1/2 flex flex-col">
            <h1 className="text-[#1F1F1F] text-[32px] !font-bold !font-[inter] leading-[36px] tracking-[1px] mt-[82px] ml-[40px] mr-[129px]">Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p className="text-[#666666] font-medium !font-[inter] text-[12px] leading-[18px] tracking-[0.5px] mt-[10px] ml-[40px] mr-[129px]">Casual | Nike | REF:38416711</p>
            <div className="flex gap-[13px]">
              <img src={classificacao} alt="estrelhas de classificação" className="w-[92px] h-[14px] ml-[40px]"/>
              <img src={notaAvaliacao} alt="nota de avaliação" className="w-[144px] h-[23px] " />
            </div>
            {/* Adicione mais detalhes do produto aqui se quiser */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductViewPage