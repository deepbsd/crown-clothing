import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_LhVQdHr1BxD1M9fGFAQvjyiC00NpTso2zo";

    const onToken = token => {
        console.log("token: ", token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;
