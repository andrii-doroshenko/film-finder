import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background: #333;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 30px;
`;

export const Nav = styled.nav`
  margin-left: auto;
`;

export const List = styled.ul`
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

  &:hover {
    color: orange;
  }

  &.active {
    color: orange;
  }
`;
