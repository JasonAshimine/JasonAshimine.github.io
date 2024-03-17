import { Props } from "../Types";
import data from "./IconData.json";

//Add internal Icon reference type here
export type IconType = keyof typeof data;

export interface IconProps extends Props{
    type:IconType,
}

export default function Icon({type, className}:IconProps){
    return (<img className={className} src={data[type]} alt={type} />)
}