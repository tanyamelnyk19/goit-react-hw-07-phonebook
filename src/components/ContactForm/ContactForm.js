import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const contactInPhonebook = contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );
    
    if (contactInPhonebook) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      // onSubmit(newContact);
      dispatch(actions.addContact(newContact));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = (state) => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (contact) => dispatch(actions.addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);