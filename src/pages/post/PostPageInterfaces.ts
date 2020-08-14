interface MatchParams {
  id: string | number;
}

interface PostPageData {
  id: string;
  title: string;
  body: string;
  comments: any[];
}

export interface PostPageProps {
  match?: any;
  postPageData: PostPageData;
  onGettingOnePost: (id: string | number) => void;
  onCommentAdd: (comment: string, postId: string | number) => void;
  onUpdatePost: (id: string | number, title: string, body: string) => void;
}

export interface MapState {
  postPageData: PostPageData;
}

export interface MapDispatch {
  onGettingOnePost: (id: string | number) => void;
  onCommentAdd: (comment: string, postId: string | number) => void;
  onUpdatePost: (id: string | number, title: string, body: string) => void;
}
