import React from 'react'
import Home from '../pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound.jsx'
import ProductListingPage from '../pages/ProductListingPage.jsx'
import ProductViewPage from '../pages/ProductViewPage.jsx'
import Layout from '../components/Layout.jsx'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/product/:id' element={<ProductViewPage />} />
                    <Route path='/produtos' element={<ProductListingPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas