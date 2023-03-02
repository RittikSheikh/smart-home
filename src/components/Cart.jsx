import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../layouts/Main';
import { deleteShoppingCart, removeFromDb } from '../utilites/FakeDb';
import CartItem from './CartItem';


const Cart = () => {
    const [cart,setCart] = useContext(CartContext)

    const handleRemove = id => {
        const afterRemove = cart.filter(i=> i.id !== id)
        setCart(afterRemove)
        removeFromDb(id)
        toast.error('item removed',{autoClose: 500})
    }

    const placeOrder = () => {
        if (cart.length !== 0) {
            setCart([])
            deleteShoppingCart()
            toast.success('order placed',{autoClose: 500})
        }
            else{
                toast.warning('purchase something to remove')
            }
        }

        let total = 0;
        for(const item of cart){
            total = total + (item.price * item.quantity)
        }

    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 my-3 rounded-sm mx-auto sm:p-10 dark:bg-sky-300 dark:text-gray-100">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700 ">
		{
            cart.map(i=><CartItem key={i.id} item={i} remove={handleRemove} />)
        }
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">${total.toFixed(2)}</span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<button type="button" className="px-6 py-2 border rounded-md bg-blue-400 dark:border-sky-400">Back
			<span className="sr-only sm:not-sr-only"> <Link to={'/shop'}>to shop</Link> </span>
		</button>
        <button onClick={placeOrder} type='button' className='px-3 py-2 rounded-md bg-green-400' >
            Place Order
        </button>
	</div>
</div>
    );
};

export default Cart;