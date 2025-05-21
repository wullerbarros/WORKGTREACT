import React from 'react'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Cards3 from '../components/Cards3'


const Home = () => {
  return (
    <>
    <Cards quantidade={8}/>
    <Cards2 quantidade={16}/>
    <Cards3 quantidade={4}/>
    </>
  )
}

export default Home