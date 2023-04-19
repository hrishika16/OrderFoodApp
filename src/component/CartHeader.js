import React from 'react'
import { Link } from 'react-router-dom'

function CartHeader() {
  return (
    <div className='cart_head'>
        <div className='cart_row'>
                <Link to="/">
                <button className='back_btn' ></button>
                </Link>
            <h5>Place Order</h5>
        </div>
    </div>
  )
}

export default CartHeader