import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/img-header/logo.svg'

const Logo = () => {
  return (
    <Link to="/"><img src={logo} alt="Logo da Digital College" className="w-[253px] h-[44px] cursor-pointer" /></Link>
  )     
}

export default Logo;