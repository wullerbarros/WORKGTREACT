import React from 'react'
import tenis2 from '../assets/tenis2.png'
import Ellipse from '../assets/Ellipse 11.svg'
import { Link } from 'react-router-dom'


const OfertaEspecial = () => {
  return (
    <>

<section className="w-[1440px] h-[553px] bg-[#ffff] flex flex-col  justify-center ">
  <div className="grid md:grid-cols-2">
    <div className=" ml-[97px] ">
      <img src={tenis2} alt="Air Jordan edição de colecionador" className="w-[576px] h-[330px] object-cover mt-[115px]" style={{zIndex: "6", position: "absolute"}} />
      <img src={Ellipse} alt="hdbchjdsh"  className='relative z-6 ml-[82px] mt-[87px]' style={{zIndex: "6", position: "relative"}}/>
    </div>
    <div className="p-8 w-[589px] mt-[106px]">
      <p className="text-[12px] text-primary font-bold-200 !font-[inter] mb-2">Oferta especial</p>
      <h2 className="text-5xl font-bold !font-[inter] text-gray-800 mb-4">
        Air Jordan edição de colecionador
      </h2>
      <p className="text-gray-600 mb-6 !font-[inter]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <Link to="/produtos">
      <button className ="bg-[var(--color-primary)] w-[200px] !text-white !font-[inter] cursor-pointer hover:bg-[#FF69B4] transition ease-in-out duration-300 !text-[14px] py-3 px-6 rounded-md mt-[100px]">
        Ver Oferta
      </button>
      </Link>
    </div>
  </div>
</section>
    </>
  )
}

export default OfertaEspecial