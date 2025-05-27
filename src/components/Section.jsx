import React from 'react'
import Destaque from './Destaque'
import Cards2 from './Cards2'
import OfertaEspecial from './OfertaEspecial'

const Section = () => {
  return (
    <>
    <Destaque />
    <Cards2 quantidade={8} className="grid grid-cols-4 mr-[100px] ml-[100px]"/>
    <OfertaEspecial />
    </>
  )
}

export default Section