import React from 'react'
import CarouselJ from '../components/CarouselJ'
import Section from '../components/Section'
import Destaque from '../components/Destaque'
import Cards from '../components/Cards'
import OfertaEspecial from '../components/OfertaEspecial'
import Colecoes from '../components/Colecoes'


const Home = () => {
  return (
    <>
    <CarouselJ />
    <Section>
      <Destaque />
    </Section>
    <Section titleAlign="center">
      <Colecoes />
    </Section>
    <Section title="Produtos em alta" link >
      <Cards quantidade={8} titulo="Produtos relacionados" produtos={[]}/>
    </Section>
    <OfertaEspecial />    
    </>
  )
}

export default Home