import React from "react";
import { Carousel } from "antd";
import Tenis from "../assets/img/img-header/tênis.svg";
import Ornament from "../assets/img/img-header/Ornament 11.svg";
import Foguinho from "../assets/img/img-header/foguinho.png";
import "antd/dist/reset.css";
import "../index.css";

function CarouselJ() {
  const slidesCarousel = [
    {
      image: Tenis,
      title: "Melhores ofertas personalizadas",
      description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas",
      topImage: Ornament,
      fireImage: Foguinho,
    },
    {
      image: Tenis,
      title: "Melhores ofertas personalizadas",
      description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas",
      topImage: Ornament,
      fireImage: Foguinho,
    },
    {
      image: Tenis,
      title: "Melhores ofertas personalizadas",
      description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas",
      topImage: Ornament,
      fireImage: Foguinho,
    },
  ];

  return (
    <section className="bg-gray-100 flex flex-col items-center justify-center !font-[inter] w-full h-[681px] top-[194px]">
      <div className="w-full relative rounded-lg overflow-hidden shadow-xl">
        <Carousel autoplay dotPosition="bottom">
          {slidesCarousel.map((slide, index) => (
            <div key={index}>
              <div className="flex">
                <div className="w-1/2 flex flex-col justify-center pl-[100px] pr-[100px]">
                  <p className="text-[#F6AA1C] !font-bold tracking-widest mt-[124px] text-base !font-[inter]">
                    {slide.title}
                  </p>                 
                  <h2 className="!text-[64px] text-[#1F1F1F] !font-extrabold !font-[inter] tracking-[1px] leading-[66px]">
                    <div>Queima de</div>
                    <div className="flex items-center">
                      stoque Nike
                      <img
                        src={slide.fireImage}
                        alt="imagem de um foguinho"
                        className="w-15 h-18 ml-1"
                      />
                    </div>
                  </h2>                  
                  <p className="text-[#474747] !text-[18px] !font-normal tracking-[0.75px] !font-[inter] leading-[34px] pr-[80px] mt-[20x]">{slide.description}</p>
                  <button className="bg-[#C92071] !text-[#F5F5F5] !font-bold !text-[16px] !font-[inter] mt-[40px] leading-[24px] tracking-[0.75px] h-[48px] w-[220px] rounded-[8px] cursor-pointer hover:bg-[#FF69B4] transform transition duration-300 ease-in-out">
                    {slide.buttonText}
                  </button>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-end relative">
                  <img
                    src={slide.image}
                    alt="Imagem do Slide"
                    className="object-contain w-full h-full px-5 mr-20 -ml-20 mt-20 mb-0"
                  />
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
