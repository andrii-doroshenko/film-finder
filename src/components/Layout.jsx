import { Outlet } from 'react-router-dom';
import { Container, Header, List, Item, StyledLink } from './App.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <Item>
                <StyledLink to="/">Home</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/movies">Movies</StyledLink>
              </Item>
            </List>
          </nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
