import Contact from '../Contact';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';

export default function ContactList() {
  const getFilteredName = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredName;
  };

  const filteredName = useSelector(({ contacts, filter }) => getFilteredName(contacts, filter));
  const dispatch = useDispatch();  

  return (
    <ul>
      {filteredName.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <Contact name={name} number={number} />
          <button className={s.button} onClick={() => dispatch(actions.deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const mapStateToProps = ({ contacts, filter }) => ({
//   filteredName: getFilteredName(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(actions.deleteContact(id)),
// })


// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);