import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  background: #333;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  font-weight: 500;
  color: #fff;
  padding: 15px;

  &.active {
    color: orange;
  }
`;
