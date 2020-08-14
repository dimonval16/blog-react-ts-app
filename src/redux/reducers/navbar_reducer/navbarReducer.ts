import { NavbarData, NavbarAction } from './navbarReducerInterfaces';

type NavbarReducerType = (state: NavbarData, action: NavbarAction) => NavbarData;

const navbarInitialState = { pageLinks: [] };

const navbarReducer: NavbarReducerType = (state = navbarInitialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default navbarReducer;
