import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LinksRoute = styled(NavLink)`
  margin-bottom: 20px;
  text-decoration: none;
  color: #fff;
  background-color: #959583;
  padding: 10px 30px;
  border-radius: 5px;
  transition: background-color 0.9s;
  &:hover,
  &:focus {
    background-color: #7c7c6a;
  }
`;
const LinksItem = styled.li`
  margin: 0px 10px;
`;

const ListUserMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 20px 100px;
`;

const PageNav = styled.div`
  background-color: #696969;
  padding: 10px;
`;

export { LinksRoute, ListUserMenu, PageNav, LinksItem };
