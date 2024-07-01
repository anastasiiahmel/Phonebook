import { useEffect, useState } from 'react';
import { List, ListItemSecondaryAction } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import {
  addContacts,
  deleteContacts,
  getAllContacts,
} from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/auth/selectors';

import {
  BtnCreateContact,
  General,
  ListItemTextName,
  ListItemTextNumber,
  ListItems,
} from './ContactsStyles.styled';
import { InputInfo, TitlePage } from '../LoginPage/LoginStyles.styled';
import { message } from 'antd';
import { IconDelet } from './ContactsStyles.styled';

const ContactsUser = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateContact = async () => {
    const { name, number } = newContact;
    const nameExists = contacts.some(contact => contact.name === name);
    const numberExists = contacts.some(contact => contact.number === number);

    if (nameExists || numberExists) {
      message.warning(
        `${name} or entered ${number} number is already in contacts.`
      );

      return;
    }
    dispatch(addContacts(newContact));
    setNewContact({ name: '', number: '' });
    message.success('Contact added!');
  };

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteContact = async id => {
    dispatch(deleteContacts(id));
    message.success('Contact removed!');
  };

  return (
    <General>
      <TitlePage>Contacts</TitlePage>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <InputInfo
            placeholder="Name"
            type="text"
            value={newContact.name}
            onChange={e =>
              setNewContact({ ...newContact, name: e.target.value })
            }
          />
          <InputInfo
            type="tel"
            placeholder="Number"
            value={newContact.number}
            onChange={e =>
              setNewContact({ ...newContact, number: e.target.value })
            }
          />
          <BtnCreateContact
            type="primary"
            htmlType="submit"
            onClick={handleCreateContact}
          >
            Create Contact
          </BtnCreateContact>
          <InputInfo
            type="text"
            placeholder="Search Contacts"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <List>
            {filteredContacts?.map(contact => (
              <ListItems key={contact.id}>
                <ListItemTextName primary={contact.name} />

                <ListItemTextNumber primary={contact.number} />
                <ListItemSecondaryAction>
                  <IconDelet onClick={() => handleDeleteContact(contact.id)} />
                </ListItemSecondaryAction>
              </ListItems>
            ))}
          </List>
        </>
      )}
    </General>
  );
};

export default ContactsUser;
