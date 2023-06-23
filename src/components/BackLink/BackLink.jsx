import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #212121;

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

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackLink;
