
import { navType } from "../../script/Nav";
import Icon, { IconType } from "../Icon/Icon";
import { Props } from "../Types";
import NavButton from "../NavButton";

export interface ProjectIconProps extends Props{
  src:string,
  text?:string,
  alt:string,
  id:string,
  tools:IconType[]
}


function ProjectIcon(props:ProjectIconProps) {
  const {src, text, tools, id} = props;

  return (
    <>
      <NavButton className="project-card card shadow-sm" type={navType.Project} data={id}>
        <div className="project-card-main">
          <img className="card-img-top" src={src} alt={props.alt}></img>
          <div className='tool-overlay'>
            {tools.map((type, key) => <Icon key={key} type={type}/>)}
          </div>
          <div className="title-overlay">
            <div className="card-text">{text}</div>
          </div>
        </div>
        
        <div className="desc-overlay">
          <p>Test sentance</p>
          <p>Test sentance Test sentance Test sentance Test sentance Test sentance</p>
          <p>Test sentance</p>
        </div>
      </NavButton>
    </>
  )
  }
  
  export default ProjectIcon