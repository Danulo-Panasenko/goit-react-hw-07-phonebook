import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
//import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
///import { deleteContact } from 'redux/operations';

const ContactList = ({ getFilteredContacts, deleteContact }) => {
  // const visibleContacts = useSelector(getFilteredContacts);
  const Contact = getFilteredContacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <Button onClick={() => deleteContact(id)} type="button">
        Delete
      </Button>
    </li>
  ));
  return <ul>{Contact}</ul>;
};
export default ContactList;

ContactList.defaultProps = {
  getFilteredContacts: [],
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  getFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
