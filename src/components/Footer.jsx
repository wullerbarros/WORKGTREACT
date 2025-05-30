import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
    return (

        <>
            <footer className="bg-[#1f1f1f] text-gray-300 !font-[Inter] px-[100px]">
                <div className="flex justify-between">
                    <div>
                        <div className="flex flex-col gap-6 font-['Inter'] text-[13px] leading-[24px] items-center w-70  mt-[72px]">
                            <Logo />
                            <p className="text-sm ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className="flex p-6 gap-7 mb-40">
                            <a className="hover:text-gray-400 text-2xl w-[10.92px] h-[20.53px]"><FaFacebookF /></a>
                            <a className="hover:text-gray-400 text-2xl w-[20px] h-[20px]"><FaInstagram /></a>
                            <a className="hover:text-gray-400 text-2xl w-[20px] h-[20px]"><FaTwitter /></a>
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
                    <div className="!font-[Inter] ml-[120px] mt-[78px]">
                        <h4 className="!font-[Inter] text-white text-[18px] leading-[18px]">Contato</h4>
                        <div className='mt-[28px]'>
                            <p className="text-sm !font-['Inter'] leading-[26px] text-[16px]">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p className="text-sm">(85) 3051-3411</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center text-gray-500 text-xs">
                    <p className='py-[22px]'>© 2022 Digital College</p>
                </div>
            </footer>
        </>

    )
}

export default Footer