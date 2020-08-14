import { Dispatch } from 'redux';

export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const RETRIEVE_POST = 'RETRIEVE_POST';
export const UPDATE_POST = 'UPDATE_POST';

interface FormValues {
  title: string;
  body: string;
}

type CreateNewPostACType = (formValues: FormValues) => (dispatch: Dispatch) => void;

export const createNewPostAC: CreateNewPostACType = (formValues) => (dispatch: Dispatch) => {
  const CREATE_NEW_POST_URL = 'https://bloggy-api.herokuapp.com/posts';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formValues),
  };

  fetch(CREATE_NEW_POST_URL, requestOptions)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: CREATE_NEW_POST,
        data,
      }),
    )
    .catch((error) => console.log('Error', error));
};

type DeletePostACType = (id: string | number) => (dispatch: Dispatch) => void;

export const deletePostAC: DeletePostACType = (id) => (dispatch: Dispatch) => {
  const DELETE_POST_URL = 'https://bloggy-api.herokuapp.com/posts';

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${DELETE_POST_URL}/${id}`, requestOptions)
    .then((res) => res.json())
    .then(() =>
      dispatch({
        type: DELETE_POST,
        id,
      }),
    )
    .catch((error) => console.log('Error', error));
};

type RetrievePostACType = (id: string | number) => (dispatch: Dispatch) => void;

export const retrievePostAC: RetrievePostACType = (id) => (dispatch: Dispatch) => {
  const RETRIEVE_POST_URL = `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`;

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(RETRIEVE_POST_URL, requestOptions)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: RETRIEVE_POST,
        data,
      }),
    )
    .catch((error) => console.log('Error', error));
};

type UpdatePostACType = (id: string | number, title: string, body: string) => (dispatch: Dispatch) => void;

export const updatePostAC: UpdatePostACType = (id, title, body) => (dispatch) => {
  const UPDATE_POST_URL = `https://bloggy-api.herokuapp.com/posts/${id}`;

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  };

  fetch(UPDATE_POST_URL, requestOptions)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: UPDATE_POST,
        data,
      }),
    )
    .catch((error) => console.log('Error', error));
};
