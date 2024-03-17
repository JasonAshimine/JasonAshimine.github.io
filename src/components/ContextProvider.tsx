import { ReactElement, createContext, useReducer } from "react"
import { dispatch, initialState, ReducerMain, state } from "../script/Data"


interface ContextData{
    state: state,
    dispatch: dispatch,
}



export const StateContext = createContext<ContextData>({
  state: initialState,
  dispatch: () => {},
});


export default function StateProvider({ children } : {children:ReactElement}){
  const [state, dispatch] = useReducer(ReducerMain, initialState)

  return (
    <StateContext.Provider value={ {state, dispatch} }>
        { children }
    </StateContext.Provider>
  )
}