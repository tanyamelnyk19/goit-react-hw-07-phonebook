import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts/reducers';
import logger from 'redux-logger';
import { 
    // persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';

const store = configureStore({
    reducer: contactsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const mainStore = { store, persistor };

export default store;