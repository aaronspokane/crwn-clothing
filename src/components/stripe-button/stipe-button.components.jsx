import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pubishableKey = 'pk_test_51GuQCqDsctpt7ljDXm0zVKiSFAKZQ27KgogeTpx5wvlvMwuJwMFDxNJO9Pig12FEtZ9PWxp1wxNVMjirKncaxObF003ATkGTB2';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubishableKey}
        />
    )
}

export default StripeCheckoutButton;