import styled from '@emotion/styled';
import { IoLogOutOutline } from 'react-icons/io5';

const ButtonGoOut = styled(IoLogOutOutline)`
  width: 100px;
  height: 40px;
  cursor: pointer;
  color: #959583;
  transition: color 0.9s;
  &:hover,
  &:focus {
    color: #7c7c6a !important;
  }
`;
const UserName = styled.p`
  font-size: 18px;
  color: #fff;
  padding: 18px 16px;
  border-radius: 40px;
  background-color: #7c7c6a;
`;

export { ButtonGoOut, UserName };
