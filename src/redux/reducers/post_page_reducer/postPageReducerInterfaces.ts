export interface PostPageData {
  id: string | number;
  title: string;
  body: string;
  comments: any[];
}

export interface PostPageAction {
  type: string;
  data: PostPageData | any;
}
