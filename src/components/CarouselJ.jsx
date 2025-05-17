import React from 'react';
import { Carousel } from 'antd'; 
import Tenis from '../assets/img/img-header/tênis.svg';
import Ornament from '../assets/img/img-header/Ornament 11.svg';
import Foguinho from '../assets/img/img-header/foguinho.png';
import 'antd/dist/reset.css'; 
import '../index.css';

function CarouselJ() {

    const slidesCarousel = [
    {
      image: Tenis, 
      title: 'Queima de estoque Nike',
      subtitle: 'Melhores ofertas personalizadas',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      buttonText: 'Ver Ofertas',
      topImage: Ornament,
      fireImage: Foguinho,
    },
    {
      image: Tenis, 
      title: 'Queima de estoque Nike',
      subtitle: 'Melhores ofertas personalizadas',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      buttonText: 'Ver Ofertas',
      topImage: Ornament,
      fireImage: Foguinho,
    },
    {
      image: Tenis, 
      title: 'Queima de estoque Nike',
      subtitle: 'Melhores ofertas personalizadas',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      buttonText: 'Ver Ofertas',
      topImage: Ornament,
      fireImage: Foguinho,
    },
  ];

  return (
    <section className="bg-gray-100 flex flex-col items-center justify-center font-inter w-full h-[681px]">
      <div className="w-full relative rounded-lg overflow-hidden shadow-xl">
        <Carousel autoplay dotPosition="bottom">
          {slidesCarousel.map((slide, index) => (
            <div key={index}>
              <div className='flex'>
                <div className="w-1/2 flex flex-col justify-center pt-10 pl-20 pr-45">
                  <p className="text-sm text-[#F6AA1C] font-bold tracking-widest mb-2">{slide.subtitle}</p>
                  <h2 className="text-3xl font-inter font-3rm text-[54px] text-[#1F1F1F] mb-0 flex items-center">
                    <span>
                      {slide.title}
                      <img src={slide.fireImage} alt="imagem de um foguinho" className="w-12 ml-2 mb-3 inline-block" />
                    </span>
                  </h2>
                  <p className="text-gray-700 mb-6">{slide.description}</p>
                  <button className='bg-[#C92071]  text-[#F7F7FC] font-inter h-[48px] w-[220px] rounded-[8px] inline-flex items-center justify-center cursor-pointer hover:bg-[#FF89D7]'>{slide.buttonText}</button>               
                </div>
                <div className="w-1/2 flex flex-col items-center justify-end relative">
                  <img src={slide.image} alt="Imagem do Slide" className="object-contain w-full h-full px-5 mr-20 -ml-20 mt-20 mb-0" />
                  <img
                    src={slide.topImage}
                    alt="Logo Superior"
                    className="absolute mt-[78px] mb-[363px] mr-[37px] ml-[500px] w-[140px] h-[140px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselJ;