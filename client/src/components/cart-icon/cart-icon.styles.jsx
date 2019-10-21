import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 1% auto;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)``;

export const ItemCountContainer = styled.span`
  position: relative;
  font-size: 12px;
  bottom: 24px;
`;
