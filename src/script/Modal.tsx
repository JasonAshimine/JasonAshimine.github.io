/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from "react";
import { state, action } from "./Data";

export interface modal {
	active?: boolean;
	element?: ReactElement;
}
export const modal = { active: false };

export const OpenModal = (element:ReactElement):action => ({type:"OpenModal", modal:{element}})

export const CloseModal = ():action => ({type:"CloseModal"})

export const ModalReducers = {
	OpenModal: (state:state, action:action) => ({ 
		...state,
		modal:{
			active:true, 
			element: action.modal?.element
		}
	}),
	CloseModal:(state:state) =>({
		...state,
		modal:{active:false, element:undefined}
	}),
}

