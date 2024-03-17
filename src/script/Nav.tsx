import { state, action } from "./Data";

export enum navType {
	Main,
	Resume,
	About,
	Contact,
	Project
}

export interface Nav {
  type: navType;
  data?: string;
}

export const nav = window.history.state ?? { type: navType.Main };
export const Nav_Reducers = {
  Goto: (state:state, action:action) =>({
    ...state,
    nav: {
      ...state.nav,
      ...action.nav
    }
  }),
};


