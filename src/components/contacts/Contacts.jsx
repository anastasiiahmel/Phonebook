import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
import axios from 'axios';
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


const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      return navigate('/login');
    }

    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          'https://connections-api.herokuapp.com/contacts',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setContacts(response.data);
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError('Error fetching contacts');
        }
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleCreateContact = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error('Authorization token is missing');
      }
console.log(newContact)
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        newContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setNewContact({ name: '', number: '' });
        setContacts([...contacts, response.data]);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Error creating contact');
      }
    }
  };

  const handleDeleteContact = async contactId => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error('Authorization token is missing');
      }

      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedContacts = contacts.filter(
          contact => contact.id !== contactId
        );
        setContacts(updatedContacts);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Error deleting contact');
      }
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                setNewContact({ ...newContact, name: e.target.value })
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
              type="text"
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
            {filteredContacts.map(contact => (
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
