import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <>
            <footer className="bg-gray-900 text-gray-300 !font-[Inter]">
                <div className="container mx-auto flex justify-between px-6 py-2">
                    <div>
                    <div className="flex flex-col gap-6 font-['Inter'] text-[13px] leading-[24px] items-center w-70 gap-3 ml-[104px] mt-[72px]">
                            <Logo />
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className="flex p-6 gap-7 ml-[104px] mb-40">
                            <a className="hover:text-gray-400 text-2xl"><FaFacebook/></a>
                            <a className="hover:text-gray-400 text-2xl"><FaInstagram/></a>
                            <a  className="hover:text-gray-400 text-2xl"><FaTwitter/></a>
                        </div>
                    </div>
                    <div className='ml-[250px] mt-[72px]'>
                        <h4 className="text-lg !font-semibold !font-[Inter] text-[18px] text-white mb-2">Informação</h4>
                        <div className='mt-[28px]'>
                        <ul className=' w-[200px]'>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Sobre Drip Store</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Segurança</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Wishlist</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Blog</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Trabalhe conosco</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-sm">Meus Pedidos</a></li>
                        </ul>
                        </div> 
                    </div>
                    <div className='ml-[102px] mt-[72px]'>
                        <h4 className="text-lg font-semibold text-white mb-2 text-[18px]">Categorias</h4>
                        <div className='mt-[28px]'>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Camisetas</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Calças</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Bonés</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400 text-sm">Headphones</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-sm">Tênis</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="!font-[Inter] ml-[168px] mt-[72px]">
                        <h4 className="!font-[Inter] text-white text-[18px] leading-[18px] mb-2">Contato</h4>
                        <div className='mt-[28px]'>
                        <p className="text-sm !font-['Inter'] leading-[26px] text-[16px]">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p className="text-sm">(85) 3051-3411</p>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white text-[13px] leading-[24px] tracking-[0]font-normal !font-['Inter']">
                    <div className="h-[1px] bg-white/30 w-[80%] mx-auto mt-[34px]"></div>
                    <p className='p-7 '>© 2022 Digital College</p>
                </div>
            </footer>
        </>

    )
}

export default Footer