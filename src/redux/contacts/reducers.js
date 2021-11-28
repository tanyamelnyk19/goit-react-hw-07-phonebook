import { combineReducers } from 'redux';
import contactsData from 'contactsData/contacts.json';
import { createReducer } from '@reduxjs/toolkit';
import { filter } from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsList = createReducer(contactsData, {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const contactsFilter = createReducer('', {
    [filter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

export default combineReducers({
    contacts: contactsList,
    filter: contactsFilter,
    loading,
})
