import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../Providers/StateProvider'
import { BookTwoTone } from '@material-ui/icons'

function CheckoutProduct({ id, image, title, price, rating, hideButtoon}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FRM_BASKET',
            id: id,
        })
    }


  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{ title }</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
            {
                Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))
            }
        </div>
        {!hideButtoon&& (
            <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
        </div>
    </div>
  )
}

export default CheckoutProduct
