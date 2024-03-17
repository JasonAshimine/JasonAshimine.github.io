import { MouseEventHandler } from "react";
import Icon, { IconType } from "./Icon/Icon";


export interface LinkIconData{
  type:IconType,
  href?:string,
  onClick?:MouseEventHandler<HTMLAnchorElement>,
}
  
  
function LinkIcon(props:LinkIconData) {
  const {type, href, onClick} = props;

  return (
    <>
      <a className='link-icon' href={href} onClick={onClick}>
        <Icon className='w-100' type={type}/>
      </a>
    </>
  )
}
  
export default LinkIcon;