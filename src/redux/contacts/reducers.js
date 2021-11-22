import { combineReducers } from 'redux';
import contactsData from '../../contactsData/contacts.json';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = contactsData;

const contactsList = createReducer(initialState, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const contactsFilter = createReducer('', {
    [actions.filter]: (_, { payload }) => payload,
})

// const contactsList = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case "contact/add":
//             return [...state, payload]; 
//         case "contact/delete":
//             return state.filter(contact => contact.id !== payload);
//         default:
//             return state;
//     };
// };

// const contactsFilter = (state = '', { type, payload }) => {
//     switch (type) {
//         case "contact/filter":
//             return payload;
//         default:
//             return state;
//     };
// };

export default combineReducers({
    contacts: contactsList,
    filter: contactsFilter,
})
