import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext, ProductsContext } from '../layouts/Main';
import { addToDb } from '../utilites/FakeDb';
import Poduct from './Poduct';


const Shop = () => {
    const products = useContext(ProductsContext)
    const [cart,setCart] = useContext(CartContext); 

    const handleAddToCart = (item) => {
        let newCart = [];
        const isExists = cart.find(i=>i.id === item.id)
        if (!isExists) {
            item.quantity = 1
            newCart = [...cart,item]
        }
        else{
            const rest = cart.filter(i=>i.id !== item.id)
            isExists.quantity = isExists.quantity + 1
            newCart = [...rest, isExists]
        }
        setCart(newCart)
        addToDb(item.id)
        toast.success('product added',{autoClose: 500})
    }
    return (
            <div className=' bg-sky-50 p-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 text-center'>
            {
                products.map(product=><Poduct key={product.id} handleAdd={handleAddToCart} product={product} />)
            }
        </div>
    );
};

export default Shop;