import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #e4ebf6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  width: 1100px;
  height: 80px;
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  &.active {
    color: red;
  }
`;

const list = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Admin', path: '/admin' },
  { name: 'Contact', path: '/contact' },
];

const generateList = list.map(({ name, path }) => (
  <ListItem key={name}>
    <StyledNavLink to={path} exact>
      {name}
    </StyledNavLink>
  </ListItem>
));

const Navigation = () => {
  return (
    <Nav>
      <List>{generateList}</List>
    </Nav>
  );
};

export default Navigation;
