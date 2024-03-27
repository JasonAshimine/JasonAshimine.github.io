//import "../App.css";

import Icon, { IconType } from "../Icon/Icon";

export interface SkillIconData{
  name?:string,
  type:IconType,
}


function SkillIcon(props: SkillIconData) {
  const {type} = props;

  return (
    <>
      <div className="avatar">
        <Icon className="" type={type}/>
        {/* <div className="card-text">{name ?? type}</div> */}
      </div>
    </>
  )
}
    
export default SkillIcon;