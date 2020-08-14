import { Dispatch } from 'redux';

export const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT';

type CreateNewCommentACType = (title: string, postId: string | number) => (dispatch: Dispatch) => void;

export const createNewCommentAC: CreateNewCommentACType = (title, postId) => (dispatch) => {
  const CREATE_NEW_COMMENT_URL = 'https://bloggy-api.herokuapp.com/comments';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postId, body: title }),
  };

  fetch(CREATE_NEW_COMMENT_URL, requestOptions)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: CREATE_NEW_COMMENT,
        data,
      }),
    )
    .catch((error) => console.log('Error', error));
};
