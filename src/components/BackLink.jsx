import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #212121;
  text-decoration: none;

  :hover {
    color: orange;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
