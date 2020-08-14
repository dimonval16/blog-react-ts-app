import { Dispatch } from 'redux';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getAllPostsAC = () => (dispatch: Dispatch): void => {
  const GET_ALL_POSTS_URL = 'https://bloggy-api.herokuapp.com/posts';

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(GET_ALL_POSTS_URL, requestOptions)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_ALL_POSTS,
        data,
      }),
    )
    .catch((error) => console.log('Error', error));
};
