import PropTypes from 'prop-types';
import s from './Contacts.module.css'

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li
            key={id}
            className={s.item} 
          >
            <p className={s.text}>{name}</p>
            <p className={s.text}>{number}</p>
            <button 
              className={s.btn}
              onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
  );
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};