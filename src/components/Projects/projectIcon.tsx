
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
  logo?:string,
  overlay:string,
}


function ProjectLogoOverlay({src, title}:{src?:string, title:string}){
  if(src){
    return (<img className="overlay-logo" src={src} alt={title}/>)
  }

  if(src == "")
    return;

  return (
  <div className="title-overlay">
    <div className="card-text">{title}</div>
  </div>) 
}



function ProjectIcon(props:ProjectIconProps) {
  const {src, title, tools, id, alt, logo} = props;

  return (
    <>
      <NavButton className="project-card shadow-sm" type={navType.Project} data={id}>
        <div className="project-card-main ">
          <img className="project-bg rounded img-fluid" src={src} alt={alt ?? id}></img>
          <div className='tool-overlay'>
            {tools.map((type, key) => <Icon key={key} type={type}/>)}
          </div>
          <ProjectLogoOverlay src={logo} title={title ?? id} />
        </div>
        
        <div className="desc-overlay">
          <h3>{title}</h3>
        </div>
      </NavButton>
    </>
  )
  }
  
  export default ProjectIcon