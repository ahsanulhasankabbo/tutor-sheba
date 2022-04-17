import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <h1 className='text-3xl py-3 font-medium'>Checkout</h1>
            <h3 className='text-xl'>Payment details</h3>
            <hr />
            <div className='mt-5'>
                <p>Name on card</p>
                <input className='border' type="text" />
            </div>
            <div>
                <p>Card number</p>
                <input className='border' type="number" name="number" id="" />
            </div>
            <div>
                <div>
                    <p>valid thought</p>
                    <input className='border' type="datetime-local" name="" id="" />
                </div>
                <div>
                    <p>CVC code</p>
                    <input className='border' type="number" name="number" id="" />
                </div>
            </div>
            <button className='checkout-button'>Purchase</button>
        </div>
    );
};

export default Checkout;