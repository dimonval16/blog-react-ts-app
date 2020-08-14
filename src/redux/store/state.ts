export const initialState = {
  navbarData: {
    pageLinks: [
      { title: 'Posts', link: '/', id: 'navbar_link_1' },
      { title: 'Create Post', link: '/posts/new', id: 'navbar_link_2' },
    ],
  },
  colorTheme: {
    primaryBackground: '#F7F5FF',
    secondaryBackground: '#A5A4FF',
    primaryTextColor: '#000',
    secondaryTextColor: '#fff',
    primaryHeadColor: '#4F35B9',
  },
  mainPageData: {
    posts: [],
  },
  postPageData: {
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
  },
};

export type InitialStateType = typeof initialState;
