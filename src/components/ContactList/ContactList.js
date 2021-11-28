import Contact from '../Contact';
import s from './ContactList.module.css';
import MyLoader from '../MyLoader/MyLoader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { getIisLoadingContacts, getFilteredName } from 'redux/contacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoadingContacts = useSelector(getIisLoadingContacts);

  const filteredName = useSelector(getFilteredName);

  return (
    <>
      {isLoadingContacts ? (<MyLoader />)
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
