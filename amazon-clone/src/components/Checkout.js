import React from 'react'
import { useStateValue } from '../Providers/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>

      <img className='checkout__ad'
      src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
      alt = ''
      />

      <h2 className='checkout__title'>Your Shopping Basket</h2>
      {/* {
        basket.map(item =>( */}
            <CheckoutProduct id= "56215"
            title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl : "
            image = "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            price = "2984"
            rating = "5"
            />
            <CheckoutProduct id= "33215"
            title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric :"
            image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            price = "3904"
            rating = "4"
            />
       {/* ))
      }*/}
      </div>
      <div className='checkout__right'>
        <Subtotal />

      </div>
    </div>
  )
}

export default Checkout
