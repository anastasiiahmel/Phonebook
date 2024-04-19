import { configureStore } from '@reduxjs/toolkit';

import { registerReducer } from './auth/slice';
import { FLUSH, PAUSE, PERSIST,  persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { contactsReducer } from './contacts/slice';

  const reducer = {
    auth: registerReducer,
    contacts: contactsReducer,
  }

  export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);