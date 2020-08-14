import { ThemeState, ThemeAction } from './themeReducerInterface';

type ThemeReducerType = (state: ThemeState, action: ThemeAction) => ThemeState;

const themeInitialState = {
  primaryBackground: '#F7F5FF',
  secondaryBackground: '#A5A4FF',
  primaryTextColor: '#000',
  secondaryTextColor: '#fff',
  primaryHeadColor: '#4F35B9',
};

const themeReducer: ThemeReducerType = (state = themeInitialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default themeReducer;
