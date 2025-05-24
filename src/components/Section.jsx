import React from 'react'
import Destaque from './Destaque'
import Cards2 from './Cards2'
import OfertaEspecial from './OfertaEspecial'

const Section = () => {
  return (
    <>
    <Destaque />
    <Cards2 quantidade={8}/>
    <OfertaEspecial />
    </>
  )
}

export default Section