import React from 'react'
import tenis2 from '../assets/tenis2.png'
import Ellipse from '../assets/Ellipse 11.svg'


const OfertaEspecial = () => {
  return (
    <>

<section className="w-full h-full flex flex-col items-center justify-center">
  <div className="grid md:grid-cols-2">
    <div className="relative">
      <img src={tenis2} alt="Air Jordan edição de colecionador" className="w-[576px] h-[330px] object-cover" style={{zIndex: "6", position: "absolute"}} />
      <img src={Ellipse} alt="hdbchjdsh" style={{zIndex: "6", position: "relative"}}/>
    </div>
    <div className="p-8">
      <p className="text-sm text-red-500 font-semibold mb-2">Oferta especial</p>
      <h2 className="text-3xl font-bold font-i text-gray-800 mb-4">
        Air Jordan edição de colecionador
      </h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full">
        Ver Oferta
      </button>
    </div>
  </div>
</section>
    </>
  )
}

export default OfertaEspecial