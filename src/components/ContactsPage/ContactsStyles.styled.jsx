import styled from '@emotion/styled';
import { ListItem, ListItemText } from '@mui/material';
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
  .css-10hburv-MuiTypography-root {
    width: 150px;
    text-align: center;
  }
`;

const ListItemTextName = styled(ListItemText)`
  .css-10hburv-MuiTypography-root {
    width: 150px;
  }
`;

export {
  General,
  BtnCreateContact,
  ListData,
  ListItems,
  ListItemTextNumber,
  ListItemTextName,
};
