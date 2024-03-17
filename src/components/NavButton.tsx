import { useContext } from "react";
import { navType } from "../script/Nav";
import { StateContext } from "./ContextProvider";

interface NavButtonProps{
    type: navType,
    data?: string,
    children: React.ReactNode,
    className?: string,
}

export default function NavButton(props: NavButtonProps){
    const {children, className, ...nav} = props;
    const {dispatch} = useContext(StateContext);


    const onClick = () => {
        window.history.pushState(nav, "");
        dispatch({type:"Goto", nav});
    }

    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
}