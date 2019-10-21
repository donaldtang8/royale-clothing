import React from "react";
import axios from "axios";

import { PaymentButton } from "./stripe-button.styles";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_D2poApj1XmvueSyOvKo4rYRI009th02lj1";

  const onToken = async token => {
    try {
      const data = {
        amount: priceForStripe,
        token
      };
      await axios.post("payment", data);
      alert("Payment sucessful");
    } catch (error) {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was an issue with your payment.");
    }
  };

  return (
    <PaymentButton
      label="Pay Now"
      name="Royale Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
