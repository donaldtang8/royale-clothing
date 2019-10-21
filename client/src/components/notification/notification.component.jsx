import React from "react";

import { NotificationContainer, TextContainer } from "./notification.styles";

const Notification = () => (
  <NotificationContainer>
    <TextContainer>
      {/* Launch Day Special! Free shipping on all orders! */}
      This is just a demo website. Test credit card details are provided at
      checkout for payment simulation.
    </TextContainer>
  </NotificationContainer>
);

export default Notification;
