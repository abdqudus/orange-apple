import React from 'react'

const Rows = ({ item, quantity, price, dispatch }) => {

    const handleDecrease = () => {
        if (quantity > 0) dispatch({ type: 'DECREMENT', payload: item })

    }
    return (

        <tr className='text-center border-black border '>
            <td className='border-black border '>{item}</td>
            <td className='border-black border '>{price}</td>
            <td className=' border  border-black '>
                <div className=' w-full grid grid-cols-3 px-2 sm:px-0 py-2 place-items-center '>
                    <button onClick={handleDecrease} className='grid place-items-center border-black border rounded-sm text-lg font-bold w-[30px]  sm:rounded-lg'>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch({ type: 'INCREMENT', payload: item })} className='grid place-items-center border border-black  rounded-sm text-lg font-bold w-[30px] sm:rounded-lg'>+</button>
                </div>
            </td>
        </tr>
    )
}

export default Rows
