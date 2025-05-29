import React from 'react'
import Logo from './Logo'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
  
<>
<footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
            <div>
                <div className="flex items-center ">
                <Logo / >             
                </div>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400"><FaFacebookF/></a>
                    <a href="#" className="hover:text-gray-400"><FaInstagram/></a>
                    <a href="#" className="hover:text-gray-400"><FaTwitter/></a>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-2">Informação</h4>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Sobre Drip Store</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Segurança</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Wishlist</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Trabalhe conosco</a></li>
                    <li><a href="#" className="hover:text-gray-400 text-sm">Meus Pedidos</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-2">Categorias</h4>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Camisetas</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Calças</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Bonés</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Headphones</a></li>
                    <li><a href="#" className="hover:text-gray-400 text-sm">Tênis</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-2">Contato</h4>
                <p className="text-sm mb-2">Av. Santos Dumont, 1510 - andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p className="text-sm">(85) 3051-3411</p>
            </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-6">
            <p>© 2022 Digital College</p>
        </div>
    </footer>
    </>
    
  )
}

export default Footer