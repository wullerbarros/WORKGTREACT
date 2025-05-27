import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Virtual, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useRef, useEffect } from 'react';
import tenisCarousel from '../assets/img/img-ProductViewPage/tenisCarousel.svg';

const CarouselSwiper = ({ activeIndex = 0 }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const slidesData = [
    { Image: tenisCarousel },
    { Image: tenisCarousel },
    { Image: tenisCarousel },
    { Image: tenisCarousel },
    { Image: tenisCarousel }
  ];

  const bgColors = [
    "bg-[#E2E3FF]",
    "bg-[#FFE8BC]",
    "bg-[#FFC0BC]",
    "bg-[#DEC699]",
    "bg-[#E8DFCF]"
  ];

  return (
    <div>
      <Swiper
        ref={swiperRef}
        modules={[Virtual, Navigation, Thumbs]}
        spaceBetween={2} // Espaçamento entre slides
        slidesPerView={1} // número de slides visíveis
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="max-w-[650px] mx-auto rounded-[4px]" // largura máxima e centralizado
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className={`flex justify-center items-center w-[700px] h-[571px] ${bgColors[index % bgColors.length]}`}>
              <img
                src={slide.Image}
                alt={`Slide ${index + 1}`}
                className="w-[498px] h-[248px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={28} // Espaçamento entre slides
        slidesPerView={5} // número de slides visíveis
        watchSlidesProgress
        className="mt-2 max-w-[650px] mx-auto" // largura máxima e centralizado
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`flex justify-center items-center w-[117px] h-[96px] cursor-pointer ${bgColors[index % bgColors.length]}`}>
              <img
                src={slide.Image}
                alt={`Miniatura ${index + 1}`}
                className="w-[80px] h-[80px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSwiper;