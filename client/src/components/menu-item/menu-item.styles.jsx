import styled from "styled-components";

export const MenuItemContainer = styled.div`
  max-width: 100%;
  height: 20vw;
  width: 15vw;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5% auto;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 900px) {
    height: 35vw;
    width: 35vw;
  }
`;

// export const MenuItemContainer = styled.div`
// `;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: brightness(50%);
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 1.5vw;
  color: white;

  @media screen and (max-width: 900px) {
    font-size: 3vw;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
