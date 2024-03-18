import { Nav } from "./Nav";
import { Nav_Reducers } from "./Nav";
import { nav } from "./Nav";
import { ModalReducers, modal } from "./Modal";

export type dispatch = (action:action) => void;
export type reducer = (state:state, action:action) => state;

export interface state{
    modal:modal,
	nav:Nav,
}

export interface action{
	type: ReducerKey,
	nav?: Nav,
	modal?: modal,
}

export const initialState: state = {
    modal,
		nav
}

const REDUCER_DATA = {
	...ModalReducers,
	...Nav_Reducers,
}

type ReducerKey = keyof typeof REDUCER_DATA;

export const ReducerMain = (state:state, action:action) : state => {
	console.log(...Object.values(action))
	if(action.type in REDUCER_DATA){
		return REDUCER_DATA[action.type](state, action);
	}

	return state;
}