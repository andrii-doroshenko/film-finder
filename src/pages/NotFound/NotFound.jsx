import { Link } from 'react-router-dom';
import { Container, Heading, Message } from './NotFound.styled';

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
