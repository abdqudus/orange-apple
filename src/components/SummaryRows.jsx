import React from 'react'

const SummaryRows = ({ title, quantity, sumTotal }) => {
    const isOrangeDiscountApplied = quantity > 2 && title == 'Orange'
    const handleClick = e => {
        e.stopPropagation()
        alert('When you buy 3 or more oranges, you get 3 oranges for the price of 2 oranges')
    }
    return (
        <tr className='text-center border-black border '>
            <td className='border-black border '>{title}</td>
            <td className='border-black border '>
                {title == "Apple" ? `${quantity} + ${quantity} free` : quantity}
            </td>
            <td className=' border relative  border-black '>
                <div className='w-full flex justify-center items-center'>

                    {sumTotal}
                    {isOrangeDiscountApplied &&
                        <span onClick={(e) => handleClick(e)} className='grid cursor-pointer place-items-center h-[20px] w-[20px]  ml-2 border border-gray-500 text-gray-500 rounded-full text-sm'>?</span>}
                </div>
            </td>
        </tr>
    )
}

export default SummaryRows
