import React from 'react'
import CarouselSwiper from '../components/CarouselSwiper.jsx'
import classificacao from '../assets/img/img-ProductViewPage/Stars.svg'
import notaAvaliacao from '../assets/img/img-ProductViewPage/Group 1103.svg'
'
import { Link } from 'react-router-dom'


const productViewPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <p>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
      </div>
      {/* coluna do carouselSwiper */}
      <div>
        <CarouselSwiper />
      </div>
      {/* coluna da descrição do produto  que está no carousel*/}
      <div>
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <p>Casual | Nike | REF:38416711</p>
        <div>
          <img src={classificacao} alt="estrelhas de classificação" />
          <img src={notaAvaliacao} alt="nota de avaliação" />
        </div>
      </div>

    </div>
  )
}

export default productViewPage