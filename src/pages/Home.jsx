import React from 'react'
import CarouselJ from '../components/CarouselJ'
import Section from '../components/Section'
import Destaque from '../components/Destaque'
import OfertaEspecial from '../components/OfertaEspecial'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Cards3 from '../components/Cards3'


const Home = () => {
  return (
    <>
    <CarouselJ />
    <Destaque /> 
    <Cards quantidade={8}/>
    {/* <Cards2 quantidade={16}/>
    <Cards3 quantidade={4}/> */}
    <OfertaEspecial />
    </>
  )
}

export default Home