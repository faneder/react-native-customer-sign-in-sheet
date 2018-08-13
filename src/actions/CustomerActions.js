import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_UPDATE,
  CUSTOMER_FETCH_REQUEST,
  CUSTOMER_FETCH_SUCCESS,
  CUSTOMER_EDIT_SUCCESS,
  CUSTOMER_INIT,
} from './types';

export const customerInit = () => {
  return {
		type: CUSTOMER_INIT
  }
}

export const customerUpdate = ({prop, value}) => {
  return {
		type: CUSTOMER_UPDATE,
		payload: { prop, value }
	};
}

export const customerCreate = ({name, phone, email, line, gender}) => {
  const { currentUser } = getCurrentUser();

  return (dispatch) => {
    dispatch({ type: CUSTOMER_CREATE_REQUEST });

    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .push({
        name, phone, email, line, gender, 
        createdAt: firebase.database.ServerValue.TIMESTAMP
      })
      .then(() => {
        dispatch({ type: CUSTOMER_CREATE_SUCCESS });

        Actions.customerList();
      });
  }
}

export const customerFetch = () => {
  const { currentUser } = getCurrentUser();

  return (dispatch) => {
    dispatch({ type: CUSTOMER_FETCH_REQUEST });

    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .on('value', snapshot => {
          dispatch({ type: CUSTOMER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
}

export const customerEdit = ({name, phone, email, line, gender, uid}) => {
  const { currentUser } = getCurrentUser();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers/${uid}`)
      .set({name, phone, email, line, gender, updatedAt: firebase.database.ServerValue.TIMESTAMP})
      .then(() => {
        dispatch({ type: CUSTOMER_EDIT_SUCCESS });
        Actions.pop();
      });
  }
}

export const customerDelete = ({uid}) => {
  const { currentUser } = getCurrentUser();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers/${uid}`)
      .remove()
      .then(() => {
        Actions.customerList();
      });
  }
}

const getCurrentUser = () => {
  return firebase.auth();
}