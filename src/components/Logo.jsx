import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/img-header/logo.svg'

const Logo = () => {
  return (
    <Link to="/"><img src={logo} alt="Logo da Digital College className= h-[60px]" /></Link>
  )     
}

export default Logo;