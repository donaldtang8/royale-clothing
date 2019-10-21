import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        position: relative;
        width: 100%;
        min-width: 30%;

        @media screen and (max-width: 900px) {
        }
    }

    a {
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: none;
        }
    }
    
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
}
    }
`;
