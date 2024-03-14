import React from 'react'
import Rows from './Rows'

const Quantity = ({ state, dispatch }) => {

    return (
        <div className='w-[95%] max-w-[800px]'>
            <table className='w-full  p-4'>
                <thead>
                    <tr className='text-center border-black border '>
                        <th className='border-black border  py-2  '>Fruits</th>
                        <th className='border-black border '>Unit Price</th>
                        <th className='border-black border '>Quantity </th>
                    </tr>
                </thead>

                <tbody>
                    <Rows item='Apple' dispatch={dispatch} quantity={state.Apple} price='60c' />
                    <Rows item="Orange" dispatch={dispatch} quantity={state.Orange} price='25c' />
                </tbody>
            </table>
        </div >
    )
}

export default Quantity
