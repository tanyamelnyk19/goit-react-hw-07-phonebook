import Contact from '../Contact';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoadingContacts = useSelector(state => state.loading);

  const getFilteredName = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredName;
  };

  const filteredName = useSelector(({ contacts, filter }) => getFilteredName(contacts, filter));  

  return (
    <>
      {isLoadingContacts ? (<h1>Загружаем...</h1>)
      : (
        <ul>
        {filteredName.map(({ id, name, number }) => (
          <li className={s.contact} key={id}>
            <Contact name={name} number={number} />
            <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      )}      
    </>
  );
};
