import { ActionTypes } from "../constants/action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const selectedUser = (users) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: users,
  };
};

export const removeSelectedUser = (users) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
    payload: users,
  };
};