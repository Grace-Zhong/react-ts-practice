import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyJBGZ } from './CartAction'


const AppWithHook = (props) => {
  const jbgz = useSelector(state => state.cart.jbgz)
  const dispatch = useDispatch()

  return <div>
    <h2>Hooks 煎饼果子: {jbgz}</h2>
    <button onClick={() => dispatch(buyJBGZ(2))}>胖胖去买煎饼果子</button>
  </div>
}


export default AppWithHook