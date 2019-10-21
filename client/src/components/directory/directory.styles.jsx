import styled from "styled-components";

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  min-width: 30%;
`;

export const JumbotronContainer = styled.div`
  height: 30vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("https://images.unsplash.com/photo-1527634311077-9943f7df34e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80");
  margin-bottom: 0 !important;

  @media screen and (max-width: 900px) {
    height: 100vw;
  }
`;

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1527634311077-9943f7df34e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80");
  filter: brightness(70%);
`;

export const HeadingContainer = styled.h1`
  font-size: 4vw;
  color: white;
  filter: unset;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
    font-size: 10vw;
  }
`;

export const DescriptionContainer = styled.h1`
  font-size: 2vw;
  font-weight: bold;
  color: white;
  filter: unset;
  text-transform: uppercase;
  margin-bottom: 2%;

  @media screen and (max-width: 900px) {
    font-size: 5vw;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;
