export interface MainPageData {
  posts: any[];
}

interface Post {
  id: number | string;
  title: string;
  body: string;
}

export interface MainPageAction {
  type: string;
  data?: Post[] | any;
  id?: string | number;
}
