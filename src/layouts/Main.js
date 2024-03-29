import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const ProductsContext = createContext([])
export const CartContext = createContext([])
const Main = () => {
    const {products,savedCart} = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    return (
        <ProductsContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}>
                <Header />
                <Outlet />
                <Footer />
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
};

export default Main;