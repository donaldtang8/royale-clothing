import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_D2poApj1XmvueSyOvKo4rYRI009th02lj1";

  const onToken = async token => {
    try {
      const data = {
        amount: priceForStripe,
        token
      };
      const res = await axios.post("payment", data);
      alert("Payment sucessful");
    } catch (error) {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was an issue with your payment.");
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
