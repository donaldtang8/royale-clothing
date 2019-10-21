import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";

export const PaymentButton  = styled(StripeCheckout)`
 background: black !important;

 span {
     background: black !important;

     &:hover {
        background: white !important;
        color: black !important;
    }
 }

 
`;