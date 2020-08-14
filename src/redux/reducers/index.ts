import { combineReducers } from 'redux';
import navbarReducer from './navbar_reducer/navbarReducer';
import themeReducer from './theme_reducer/themeReducer';
import mainPageReducer from './main_page_reducer/mainPageReducer';
import postPageReducer from './post_page_reducer/postPageReducer';

export const rootReducer = combineReducers({
  navbarData: navbarReducer,
  colorTheme: themeReducer,
  mainPageData: mainPageReducer,
  postPageData: postPageReducer,
});
