import React from "react";

import { ContactPageContainer, ListContainer } from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <div className="h2">CONTACT</div>
    <div>
      This website is just a demo ecommerce project. Contact information about
      the developer is provided below.
    </div>
    <ListContainer class="list-unstyled">
      <div className="h4">Contact Links</div>
      <li>
        <a href="https://turazi.xyz" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="https://github.com/turazi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="mailto:turazinyc@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Email
        </a>
      </li>
    </ListContainer>
  </ContactPageContainer>
);

export default ContactPage;
