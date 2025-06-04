import React from 'react'
import Home from '../pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound.jsx'
import ProductListingPage from '../pages/ProductListingPage.jsx'
import ProductViewPage from '../pages/ProductViewPage.jsx'
import Layout from '../components/Layout.jsx'
import Cadastro from '../pages/Cadastro.jsx'
import Aside from '../components/Aside.jsx'
import CarouselSwiper from '../components/CarouselSwiper.jsx'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/product/1' element={<ProductViewPage />} />
                    <Route path='/produtos' element={<ProductListingPage />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/aside' element={<Aside />} />
                    <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>   
                    <Route path="/carouselSwiper" element={<CarouselSwiper></CarouselSwiper>}></Route>
                                         
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas