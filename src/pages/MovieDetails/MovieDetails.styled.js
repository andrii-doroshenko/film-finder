import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Section = styled.section`
  text-align: ${props => (props.$centered ? 'center' : 'start')};

  &:not(:last-child) {
    border-bottom: 2px solid lightgray;
  }
`;

export const Container = styled.div`
  padding: 15px;
`;

export const IframeBackdrop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(51, 51, 51);
  overflow: hidden;
`;

export const PlayIcon = styled(BsFillPlayCircleFill)`
  width: 67px;
  height: 67px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  transition: opacity 200ms linear;

  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orange;
  }
`;

export const StyledLinkTrailer = styled(StyledLink)`
  margin: 15px auto;
  padding: 0 15px;
  display: inline-block;
  width: 320px;
  height: 150px;

  @media screen and (min-width: 576px) {
    width: 500px;
    height: 300px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 420px) {
    display: flex;
  }
`;
