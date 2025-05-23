import React from 'react'


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
                    <a href="#" className="hover:text-gray-400"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h3V9.5C11 7.57 12.69 6 15 6c1.7 0 3.1.86 3.1 2.1v2.9H19v3h-3v4.8c5.78-.8 10-4.83 10-9.8z"/></svg></a>
                    <a href="#" className="hover:text-gray-400"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.67-1.65 1.13-2.56 1.35 1.76-1.06 3.1-2.75 3.77-4.75-.83.5-1.74.85-2.72 1.05C18.37 4.5 16.86 4 15.1 4c-2.76 0-5 2.24-5 5 0 .38.04.76.12 1.13-4.1-.2-7.72-2.1-10.14-5.1a5 5 0 0 0-.69 2.5c0 1.76.9 3.3 2.28 4.22-.71-.22-1.64-.34-2.34-.34-.08 1.77 1.35 3.24 3.11 3.58-.4.1-.8.15-1.2.15-.3 0-.6-.02-.9-.05.6 1.9 2.37 3.28 4.46 3.32-1.68 1.3-3.8 2.1-6.13 2.1-.3 0-.6 0-.9-.03C6.62 18.7 9.26 19.5 12.16 19.5c5.8 0 9-4.85 9-9v-.4c.67-.5 1.22-1.12 1.66-1.8z"/></svg></a>
                    <a href="#" className="hover:text-gray-400"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M23.953 4.57a10 10 0 0 1-2.825 9.565 5 5 0 0 1-7.123 2.34A5 5 0 0 1 5.158 7.354 10 10 0 0 0 2.055 3.75 10 10 0 0 0 8.3 21.255 5 5 0 0 1 17.945 12.646 5 5 0 0 1 12.3 3.354 10 10 0 0 1 23.953 4.57z"/></svg></a>
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