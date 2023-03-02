import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../layouts/Main';
import { removeFromDb } from '../utilites/FakeDb';
import CartItem from './CartItem';


const Cart = () => {
    const [cart,setCart] = useContext(CartContext)

    const handleRemove = id => {
        const afterRemove = cart.filter(i=> i.id !== id)
        setCart(afterRemove)
        removeFromDb(id)
        toast.info('item removed',{autoClose: 500})
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
			<span className="font-semibold">357 €</span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<button type="button" className="px-6 py-2 border rounded-md dark:border-sky-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" className="px-6 py-2 border rounded-md dark:bg-sky-400 dark:text-gray-900 dark:border-sky-500">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
    );
};

export default Cart;