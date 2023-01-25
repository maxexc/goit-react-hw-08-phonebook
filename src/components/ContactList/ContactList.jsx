import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
import { Contact } from 'components/Contact/Contact';
// import css from './TaskList.module.css';
import { List } from './ContactList.styled';
import { selectСontacts } from 'redux/contacts/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectСontacts);

  return (
    <List >
      {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
