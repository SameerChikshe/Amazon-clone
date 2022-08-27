import React from 'react'
import {useStateValue} from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
function Checkout() {

    const [{basket}] = useStateValue()
  
  return (
<div className='checkout'>
<div className='checkout__left'>
<img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg' alt=''/>

{basket?.length ===0 ? (

<div>

    <h1>Your Amazon Cart is empty</h1>
    <p>You have no items in youe cart. To buy one or more items, click on "Add to basket" next to item</p>
</div>

)  :  (

<div>

<h1 className='checkout__title'>Your Amazon Cart</h1>

{/* List out all of the chekout products */}

{basket?.map(item =>(
  
<CheckoutProduct 
id={item.id} 
title={item.title} 
image={item.image}
 price={item.price} 
 rating={item.rating}/>
))
}
</div>
)
}
</div>

{basket.length > 0 &&(
  <div className='checkout__right'>
    <Subtotal/>
  </div>
)

}


</div>
  );
}

export default Checkout