import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  List,
  Item,
  StyledLink,
  Nav,
} from 'components/App.styled';
import Logo from 'components/Logo/Logo';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo />
          <Nav>
            <List>
              <Item>
                <StyledLink to="/">Home</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/movies">Movies</StyledLink>
              </Item>
            </List>
          </Nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
