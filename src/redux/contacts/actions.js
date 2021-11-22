import { createAction } from '@reduxjs/toolkit';

const addContact = createAction("contact/add");

// export const addContact = (contact) => ({
//     type: "contact/add",
//     payload: contact,
// });

const deleteContact = createAction("contact/delete");

// export const deleteContact = (contactId) => ({
//     type: "contact/delete",
//     payload: contactId,
// });

const filter = createAction("contact/filter");

// export const filter = value => ({
//     type: "contact/filter",
//     payload: value,
// })

const actions = { addContact, deleteContact, filter };

export default actions;