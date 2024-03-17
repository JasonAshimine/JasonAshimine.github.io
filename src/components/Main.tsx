import { ProjectIconProps } from "./Projects/projectIcon";
import ProjectList from "./Projects/projectList";
import SkillList, { SkillListData } from "./Skills/SkillList";

export interface MainProps{
    Projects:ProjectIconProps[], 
    Proficient: SkillListData,
    Familiar: SkillListData,
}




export default function MainPage({Projects, Proficient, Familiar} : MainProps){
    //bg-secondary

    return (
        <>
            <div className="row banner row-cols-1 row-cols-md-2 rounded m-0">
                <div className='col'>
                <SkillList {...Proficient} />
                </div> 
                <div className='col'>
                <SkillList {...Familiar} />
                </div>      
            </div> 

            <div className='mt-3'>
                <ProjectList list={Projects} />
            </div>
        </>
    );
}