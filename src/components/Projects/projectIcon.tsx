
import { navType } from "../../script/Nav";
import Icon, { IconType } from "../Icon/Icon";
import { Props } from "../Types";
import NavButton from "../NavButton";
import "./Project.css";

export interface ProjectIconProps extends Props{
  src:string,
  title?:string,
  alt?:string,
  id:string,
  tools:IconType[],
  overlay:string,
}


function ProjectIcon(props:ProjectIconProps) {
  const {src, title, tools, id, alt,overlay} = props;

  return (
    <>
      <NavButton className="project-card shadow-sm" type={navType.Project} data={id}>
        <div className="project-card-main ">
          <img className="card-img-top rounded img-fluid" src={src} alt={alt ?? id}></img>
          <div className='tool-overlay'>
            {tools.map((type, key) => <Icon key={key} type={type}/>)}
          </div>
          <div className="title-overlay">
            <div className="card-text">{title}</div>
          </div>
        </div>
        
        <div className="desc-overlay">
          {overlay}
        </div>
      </NavButton>
    </>
  )
  }
  
  export default ProjectIcon