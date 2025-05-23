import React from 'react'
import { Link } from 'react-router-dom';
import logoRosa from '../assets/img/img-header/logoRosa.svg'
import logoBranca from '../assets/img/img-header/logoBranca.svg'

const Logo = ({color = 'branca'}) => {
  const logoSrc = color === 'rosa' ? logoRosa : logoBranca
  return (
    <Link to="/"><img src={logoSrc} alt="Logo da Digital College" className="w-[253px] h-[44px] cursor-pointer" /></Link>
  )     
}

export default Logo;