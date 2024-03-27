import SkillIcon, {SkillIconData} from "./SkillIcon";

export interface SkillListData{
  title:string, 
  list:SkillIconData[],
}

function SkillList(props: SkillListData) {
    const {title, list} = props;
  
    return (
      <>
        <div className="d-flex justify-content-middle align-items-center">
          <h4 className="skill-title mb-0">
            {title}
          </h4>
          {list.map((data, key) => <SkillIcon {...data} key={key}/>)}
      </div>
      </>
    )
  }
      
  export default SkillList;