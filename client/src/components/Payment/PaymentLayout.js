import React from 'react'
import { Outlet } from 'react-router-dom'
import './PaymentLayout.css'

const PaymentLayout = () => {
  return (
    <div class='payment'>
        <div class='sidebar'>
            <div>Make Payment</div>
            <div>View Order Details</div>
            <div>Payment History</div>
        </div>

        <div class='contentout'>
            <div class='content'>

                <div class='navbar'>
                    <div>Hello</div> 
                </div>

                <div class='layout'>
                    <Outlet/>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PaymentLayout