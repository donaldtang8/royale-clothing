import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  margin: 10px auto;
  padding: 0 20px;
`;

export const NavLink = styled(Link)`
  font-size: 2em;
`;

export const NavItem = styled.li`
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;
