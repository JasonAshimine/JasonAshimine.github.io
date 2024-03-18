import ProjectIcon, { ProjectIconProps } from "./projectIcon";

export interface ProjectListProps{
    list:ProjectIconProps[],
}
  
function ProjectList(props:ProjectListProps) {
  const {list} = props;

  return (
    <div className='row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3'>
        {list.map((props, key) => <div className="col" key={key}> <ProjectIcon {...props}></ProjectIcon></div>)}
    </div>        
  )
}

export default ProjectList;