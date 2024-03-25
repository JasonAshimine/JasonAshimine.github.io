import SkillList, { SkillItem } from "../components/Projects/Skill";

export type SkillData = Record<string, SkillItem[]>;

export function GetSkills(data: SkillData) {
  return (
    <div className="skill-container row row-cols-1 row-cols-md-2">
      {Object.entries(data).map(([title, data], key) => <SkillList key={key} title={title} list={data} />)}
    </div>);
}

