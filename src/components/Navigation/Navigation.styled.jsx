import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LinksRoute = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  background-color: #959583;
  padding: 10px 30px;
  border-radius: 5px;
  transition: background-color 0.9s;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: #7c7c6a;
  }
`;

const ListUserMenu = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 20px 100px;
`;

const PageNav = styled.div`
  background-color: #696969;
  padding: 10px;
`;

const WrapperGoOut = styled.div`
  display: flex;
`;

export { LinksRoute, ListUserMenu, PageNav, WrapperGoOut };
