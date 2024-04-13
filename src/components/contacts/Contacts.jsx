import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Typography
} from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/slice';

import { addContacts, deleteContacts, getAllContacts } from 'redux/contacts/operations';


  const Contacts = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [error, setError] = useState(null);
  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleCreateContact = async (v, a) => {
  const {name, number} = newContact;
  const nameExists = contacts.some(contact => contact.name === name);
  const numberExists = contacts.some(contact => contact.number === number);

  if (nameExists || numberExists) {
    alert(`${name} or entered ${number} number is already in contacts.`);
    setError(null);
    setNewContact({ name: '', number: '' });
    return;
  }
  dispatch(addContacts(newContact));
  Notify.success('Contacts add!');
};

  const filteredContacts = contacts?.filter(contact =>
  contact.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  const handleDeleteContact = async id => {
    dispatch(deleteContacts(id));
    Notify.success('Contact removed!');
  
  };

  

  return (
    <div>
        <Typography variant="h3" align="center" >
            Contacts
           </Typography>

      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
            <div>
              <Box maxWidth="100vh"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingLeft={50}
              >
                
                <TextField
              type="text"
              placeholder="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={newContact.name}
              onChange={e =>
                setNewContact({ ...newContact, name: e.target.value})
              }
                />
              </Box>
              <Box maxWidth="100vh"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingLeft={50}
              >
            <TextField
              type="tel"
              placeholder="Number"
              variant="outlined"
              margin="normal"
              fullWidth
                  value={newContact.number}
                  onChange={e =>
                    setNewContact({ ...newContact, number: e.target.value })
                  }
                  />

            <Button
              variant="contained"
              color="primary"
              fullWidth
                  onClick={handleCreateContact}
                  sx={{ width: '200px',
                  display: 'block',
                  margin: '0 auto',}}
            >
              Create Contact
                </Button>
            </Box>
            </div>
             <Box  maxWidth="100vh"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingLeft={50}>
          <div>
                <TextField
              type="text"
              placeholder="Search Contacts"
              variant="outlined"
              margin="normal"
              fullWidth
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
              </div>
            </Box>
            <Box maxWidth="100vh"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingLeft={50}
              >
          <List>
            {filteredContacts?.map(contact => (
              <ListItem key={contact.id}>
                <ListItemText primary={contact.name} />
                 <ListItemText primary={contact.number} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                  x
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
              </List>
              </Box>
        </>
      )}
    </div>
  );
};

export default Contacts;
