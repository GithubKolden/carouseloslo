import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../lib/client';
//import getStripe from '../lib/getStripe'; 
import { Box, Container } from '@mui/system';
import { Button } from '@mui/material';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  /*HANDLECHECKOUT HER!*/

  return (
    <Container
    style={{
      marginTop: '50px',
      color: '#494949',
      maxWidth: '525px',
      maxHeight: '40vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
      <div className="cart-wrapper" ref={cartRef} style={{width: "100%", height: "20px", paddingTop: "3%"}}>
        <div className="cart-container">

          {cartItems.length < 1 && (  
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>
              <Link href="/shop">
                  Continue Shopping
              </Link>

            </div>
          )}

          <div className="product-container">

            {cartItems.length >= 1 && cartItems.map((item) => (
              
              <div className="product" key={item._id}>

                <img src={urlFor(item?.image[0])} className="cart-product-image" />

                <div className="item-desc">

                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>

                  <div className="flex bottom">

                    <div>
                    <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                      <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                    </p>
                    </div>

                    <button type="button" className="remove-item" onClick={() => onRemove(item)}>
                      <TiDeleteOutline style={{color: "red"}} />
                    </button>

                  </div>

                </div>
              </div>

            ))}

          </div>

          <div class="drawed_line_total"></div>

          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>{totalPrice},-</h3>
              </div>
              <div style={{textAlign: "center"}}>
                <Button
                variant="contained"
                color="success"
                type="button"
                style={{ cursor: 'pointer' }}>
                  Continue to payment
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </Container>
  )
}

export default Cart;

/* STRIPE PAYMENTGATEWAY:
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }*/