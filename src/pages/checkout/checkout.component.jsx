import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {/* one block for each header item */}
            <div className='header=block'>
                <span>Products</span>
            </div>
            <div className='header=block'>
                <span>Description</span>
            </div>
            <div className='header=block'>
                <span>Quantity</span>
            </div>
            <div className='header=block'>
                <span>Price</span>
            </div>
            <div className='header=block'>
                <span>Remove</span>
            </div>
        </div>

        {/* Check to make sure our props are working */}
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} />
                )
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);