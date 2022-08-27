import React from 'react'
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import {getBasketTotal} from "./Reducer"
import './Subtotal.css'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>

<CurrencyFormat
renderText={(value)=>(
    <>
    <p>
        Subtotal [{basket.length} items]: <strong>{value}</strong>
        </p>

        <small className='subtotal__gift'>
            <input type="checkbox"/>This order contains gift
            
        </small>
        <button>Proceed to checkout</button>
    </>
    
)}

decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        Prefix={"₹"}
        
/>
       
    </div>
  )
}

export default Subtotal;