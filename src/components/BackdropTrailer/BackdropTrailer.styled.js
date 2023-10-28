import styled from 'styled-components';
import { BsFillXSquareFill } from 'react-icons/bs';

export const CloseIcon = styled(BsFillXSquareFill)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #a1a1a1;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 200ms linear;

  &:hover {
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const IframeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 200px;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 576px) {
    width: 560px;
    height: 315px;
  }
`;

export const IframeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: #a1a1a1;
  font-weight: 700;
  padding: 1rem;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
