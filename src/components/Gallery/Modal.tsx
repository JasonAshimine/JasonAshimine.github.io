import { MouseEventHandler, useContext } from "react";
import "./Modal.css";
import { StateContext } from "../ContextProvider";

export default function Modal(){
  const {state, dispatch} = useContext(StateContext);
  const show = state.modal.active ? 'show' : 'd-none';

  const handleClose:MouseEventHandler<HTMLElement> = (event) =>{
    const target = event.currentTarget as HTMLElement;
    if(target.role == "dialog")
      dispatch({type:"CloseModal"});
  }

  return (
    <>
    <div className={`modal fade ${show} d-flex justify-content-center align-items-center`} tabIndex={-1} role="dialog" aria-hidden={state.modal.active} onClick={handleClose}>
      <button className="btn-close" type="button" aria-label="Close"></button>
      <div className="modal-main w-75 h-75" onClick={e => e.stopPropagation()}>        
        {state.modal.element}
      </div>            
    </div>
    

    <div className={`modal-backdrop fade ${show}`}>
    </div>
  </>
  )
}