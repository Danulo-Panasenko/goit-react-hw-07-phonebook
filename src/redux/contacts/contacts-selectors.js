export const getAllContacts = store => store.contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    // console.log(contacts.items.data);
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
};
