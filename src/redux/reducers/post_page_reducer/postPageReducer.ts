import { PostPageData, PostPageAction } from './postPageReducerInterfaces';
import { RETRIEVE_POST, UPDATE_POST } from '../../actions/one_post_actions/onePostActions';
import { CREATE_NEW_COMMENT } from '../../actions/comments_action/commentsActions';

type PostPageReducerType = (state: PostPageData, action: PostPageAction) => PostPageData;

const postPageInitialState = {
  id: '',
  title: '',
  body: '',
  comments: [
    {
      id: '',
      postId: '',
      body: '',
    },
  ],
};

const mainPageReducer: PostPageReducerType = (state = postPageInitialState, action) => {
  switch (action.type) {
    case RETRIEVE_POST: {
      return {
        ...state,
        id: action.data?.id,
        title: action.data?.title,
        body: action.data?.body,
        comments: action.data?.comments.reverse(),
      };
    }

    case UPDATE_POST: {
      return {
        ...state,
        title: action.data.title,
        body: action.data.body,
      };
    }

    case CREATE_NEW_COMMENT: {
      return {
        ...state,
        comments: [action.data, ...state.comments],
      };
    }

    default: {
      return state;
    }
  }
};

export default mainPageReducer;
