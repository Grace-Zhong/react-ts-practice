import React from 'react'
import { connect } from 'react-redux'
import { buyJBGZ } from './CartAction'

const App = (props: any) => {
  // const handleClick = () => {
  //   const { buyJBGZ } = props;
  //   buyJBGZ(2)
  // }
  return <div>
    <h2>煎饼果子: {props.jbgz}</h2>
    <button onClick={() => { props.buyJBGZ(2) }}>胖胖去买煎饼果子</button>
  </div>
}

const mapStateToProps = (state: any) => {
  const { jbgz } = state.cart
  return {
    jbgz
  }
}

const mapActionsToProps = {
  buyJBGZ
}

export default connect(mapStateToProps, mapActionsToProps)(App)