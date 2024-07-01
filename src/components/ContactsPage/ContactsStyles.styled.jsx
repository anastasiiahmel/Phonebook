import styled from '@emotion/styled';
import { ListItem, ListItemText } from '@mui/material';
import { DeleteFilled } from '@ant-design/icons';
import { BtnAuth } from 'components/LoginPage/LoginStyles.styled';

const General = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnCreateContact = styled(BtnAuth)`
  margin-bottom: 20px;
`;

const ListData = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-direction: column;
`;

const ListItems = styled(ListItem)`
  width: 500px;
  display: flex;
  justify-content: space-between;
  overflow-wrap: break-word;
`;
const ListItemTextNumber = styled(ListItemText)`
  width: 200px;
  text-align: center;
  margin-right: 50px;
`;

const ListItemTextName = styled(ListItemText)`
  width: 50px;
  text-align: center;
  margin-right: 50px;
`;

const IconDelet = styled(DeleteFilled)`
  color: #7c7c6a;
  transition: color 0.9s;
  &:hover,
  &:focus {
    color: #4e4b4b;
  }
`;

export {
  General,
  BtnCreateContact,
  IconDelet,
  ListData,
  ListItems,
  ListItemTextNumber,
  ListItemTextName,
};
