import React from 'react';

const Poduct = ({product,handleAdd}) => {
    const {picture,name,price} = product;
    return (
           <div className="max-w-xs p-4 rounded-md shadow-md dark:bg-sky-300 dark:text-gray-50">
	<img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-md font-medium tracking-widest uppercase dark:text-indigo-800">${price}</span>
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
	</div>
    <div className='m-0'>
        <button onClick={()=>handleAdd(product)} className='bg-sky-200 w-full py-2 px-1 rounded-md text-sky-500 font-semibold'>Buy Now</button>
    </div>
</div>
    );
};

export default Poduct;