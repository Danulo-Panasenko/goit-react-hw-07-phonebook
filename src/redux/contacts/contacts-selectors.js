export const getAllContacts = ({ contacts }) => contacts.item;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.item;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
};
