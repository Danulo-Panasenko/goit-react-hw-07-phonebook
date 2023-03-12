import * as api from '../operations';
import * as actions from './contacts-actions';

export const fetchAllContacts = async () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return func;
};
export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      dispatch(actions.fetchAddContactsLoading());
      const result = await api.addContct(data);
      dispatch(actions.fetchAddContactsSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactsError(response.data.message));
    }
    return func;
  };
};
export const fetchdeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactsLoading());
      await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactsSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactsError(response.data.message));
    }
  };

  return func;
};
