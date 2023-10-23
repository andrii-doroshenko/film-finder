import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo192.png';

export const WrapLogo = styled(NavLink)`
  display: block;
  width: 60px;
  height: 60px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;
