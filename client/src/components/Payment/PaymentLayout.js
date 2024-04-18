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
                    <div class='navicon'>
                        <img class='iconimg' src='' alt=''/>
                        <div class='icontext'>Credit/Debit Card</div>
                    </div> 
                    <div class='navicon'>
                        <img class='iconimg' src='' alt=''/>
                        <div class='icontext'>Cheques</div>
                    </div> 
                    <div class='navicon'>
                        <img class='iconimg' src='' alt=''/>
                        <div class='icontext'>Star Points</div>
                    </div> 
                    <div class='navicon'>
                        <img class='iconimg' src='' alt=''/>
                        <div class='icontext'>Koko</div>
                    </div> 
                    <div class='navicon'>
                        <img class='iconimg' src='' alt=''/>
                        <div class='icontext'>Mintpay</div>
                    </div> 
                    
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