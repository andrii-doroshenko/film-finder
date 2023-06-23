import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Section = styled.section`
  &:not(:last-child) {
    border-bottom: 2px solid lightgray;
  }
`;

export const Container = styled.div`
  padding: 15px;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 420px) {
    display: flex;
  }
`;
