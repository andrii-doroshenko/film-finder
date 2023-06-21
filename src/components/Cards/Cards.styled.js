import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

export const BackDrop = styled.div`
  width: 185px;
  height: 278px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2efef;
  border-radius: 4px;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  width: 185px;
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orange;
  }
`;
