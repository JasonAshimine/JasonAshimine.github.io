
import { navType } from "../script/Nav";
import NavButton from "./NavButton";

export default function NotFound404(){
    return (
        <>
        <div>Got Lost?</div>
        <NavButton className="link" type={navType.Main}>go to main</NavButton>
        </>        
    );
}