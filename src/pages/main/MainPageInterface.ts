import { History } from 'history';

interface ColorTheme {
  primaryBackground: string;
  secondaryBackground: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  primaryHeadColor: string;
}

export interface Post {
  id: number | string;
  title: string;
  body: string;
}

interface MainPageData {
  posts: Post[];
}

export interface MapState {
  colorTheme: ColorTheme;
  mainPageData: MainPageData;
}

export interface MapDispatch {
  getAllPosts: () => void;
  onPostDelete: (id: string | number) => void;
  onGettingOnePost: (id: string | number) => void;
}

export interface MainPageProps {
  colorTheme: ColorTheme;
  getAllPosts: () => void;
  mainPageData: MainPageData;
  onPostDelete: (id: string | number) => void;
  onGettingOnePost: (id: string | number) => void;
  history?: History;
}
