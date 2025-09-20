import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider
            options = {{"client-id" : "AfnizYdntbrIOFTG84MOrGHY93sQm9guTmhN3GGSi2WYNDn9yyzqVQw6DqgQ9xqnrUgDsDpKc6N5zkjK"}}
        >
            <PayPalButtons
                style = {{layout: "vertical"}}
                createOrder = {(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{amount: {value: amount}}]
                    })
                }}
                onApprove = {(data, actions) => {
                    return actions.order.capture().then(onSuccess)
                }}
                onError = {onError}
            >

            </PayPalButtons>
        </PayPalScriptProvider>
    )
}

export default PayPalButton;
