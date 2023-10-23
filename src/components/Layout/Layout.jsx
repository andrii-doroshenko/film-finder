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
import styled from 'styled-components';

const LayoutInner = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

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
        <LayoutInner>
          <Outlet />
        </LayoutInner>
      </main>
    </>
  );
};

export default Layout;
