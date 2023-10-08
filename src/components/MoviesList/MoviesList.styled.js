import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  max-width: 185px;
`;

export const PopularList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  padding: 0;
  align-items: stretch;
  list-style: none;
`;

export const Overlay = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.75);
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h3`
  margin: 5px 0 15px 0;
`;

export const Thumb = styled.div`
  position: relative;
  height: 278px;
`;

export const Item = styled.li`
  margin: 0 auto;
  width: 185px;
  border-radius: 4px;
`;
