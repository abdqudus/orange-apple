import React, { useReducer } from 'react'
import Quantity from './Quantity'
import Summary from './Summary'
import reducer from '../reducer'
import PayBtn from './PayBtn'

const Body = () => {
    const initialState = { Orange: 0, Apple: 0 }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='p-4 body flex flex-col justify-center items-center gap-8'>
            <Quantity state={state} dispatch={dispatch} />
            <Summary state={state} />
            <PayBtn />
        </div>
    )
}

export default Body
