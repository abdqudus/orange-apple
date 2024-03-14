import React from 'react'
import SummaryRows from './SummaryRows'

const Summary = ({ state }) => {
    const applePrice = state.Apple * 60;

    const getOrangePrice = q => {
        const remainder = q % 3
        const discount = (q - remainder) / 3
        return (discount * 50) + (remainder * 25)
    }
    const orangePrice = getOrangePrice(state.Orange)
    return (
        <div className='w-[95%] max-w-[800px]'>
            <table className='w-full h-full  p-4'>
                <thead>
                    <tr className='text-center border-black border '>
                        <th className='border-black border  py-2  '>Purchase</th>
                        <th className='border-black border '>Quantity Recieved</th>
                        <th className='border-black border '>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <SummaryRows title='Apple' quantity={state.Apple} sumTotal={`${applePrice}c`} />
                    <SummaryRows title='Orange' quantity={state.Orange} sumTotal={`${orangePrice}c`} />
                    <SummaryRows title='Total' quantity={state.Apple * 2 + state.Orange} sumTotal={`${orangePrice + applePrice}c`} />
                </tbody>

            </table>
        </div>
    )
}

export default Summary
