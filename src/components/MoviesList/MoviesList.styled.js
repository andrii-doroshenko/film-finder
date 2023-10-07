import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  max-width: 185px;
`;

export const PopularList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 0;
  /* grid-gap: 10px; */
  align-items: stretch;
  list-style: none;
`;

// export const Container = styled.div`
//   padding-left: 15px;
//   padding-right: 15px;
// `;

// export const BackDrop = styled.div`
//   width: 185px;
//   height: 278px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f2efef;
//   border-radius: 4px;
// `;

export const Item = styled.li`
  margin: 0 auto;
  width: 185px;
  padding: 10px;
  border-radius: 4px;
`;

// export const Title = styled.p`
//   font-size: 14px;
//   margin-top: 10px;
// `;

// export const StyledLink = styled(NavLink)`
//   color: #212121;
//   &.active {
//     color: orange;
//   }
// `;
