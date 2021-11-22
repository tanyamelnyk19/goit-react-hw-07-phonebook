import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();  

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={(e) => dispatch(actions.filter(e.target.value))}
      />
    </label>
  );
}

// const mapStateToProps = ({ filter }) => ({
//   filter: filter,
// });

// const mapDispatchToProps = dispatch => ({
//   handleFilter: (e) => dispatch(actions.filter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);