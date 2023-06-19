import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>The page you are looking for does not exist.</Message>
      <Link to="/">Go back to Home</Link>
    </Container>
  );
};

export default NotFound;
