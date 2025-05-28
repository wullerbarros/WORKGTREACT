import React from 'react'
import Destaque from './Destaque'
import Cards from './Cards'
import OfertaEspecial from './OfertaEspecial'

const Section = () => {
  return (
    <>
    <Destaque />
    <Cards quantidade={8} titulo='Produtos em alta'/>
    <OfertaEspecial />
    </>
  )
}

export default Section