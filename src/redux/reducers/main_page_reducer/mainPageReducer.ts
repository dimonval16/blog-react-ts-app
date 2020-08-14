import { MainPageData, MainPageAction } from './mainPageReducerInterfaces';
import { GET_ALL_POSTS } from '../../actions/posts_actions/postsActions';
import { CREATE_NEW_POST, DELETE_POST } from '../../actions/one_post_actions/onePostActions';

type MainPageReducerType = (state: MainPageData, action: MainPageAction) => MainPageData;

const mainPageInitialState = { posts: [] };

const mainPageReducer: MainPageReducerType = (state = mainPageInitialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS: {
      return {
        ...state,
        posts: action.data,
      };
    }

    case CREATE_NEW_POST: {
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    }

    default: {
      return state;
    }
  }
};

export default mainPageReducer;
