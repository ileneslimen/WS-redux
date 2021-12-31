import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addname, decrement, increment } from '../redux/actions'

function Counter() {

    const dispatch = useDispatch()
    const x= useSelector(state=> state.count  )
    const [name, setName]= useState('')
    return (
        <div>
            <button onClick={()=>dispatch(increment(5))}   >+</button>
            <span>   {x} </span>
            <button   onClick={()=>  dispatch(decrement())  }  >-</button>
            <input     onChange={(e)=>setName(e.target.value)}  />
            <button onClick={()=>dispatch(addname({name}))}   > add </button>
        </div>
    )
}


export default Counter
