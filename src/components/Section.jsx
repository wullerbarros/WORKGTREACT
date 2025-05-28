import React from 'react'
import Destaque from './Destaque'
import OfertaEspecial from './OfertaEspecial'
import Cards from './Cards'

const Section = () => {
  return (
    <>
    <Destaque />
    <Cards quantidade={8} titulo="Produtos em alta" /> 
    <OfertaEspecial />
    </>
  )
}

export default Section