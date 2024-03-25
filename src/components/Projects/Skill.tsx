import "./Skill.css";

export type SkillItem = {
    title:string,
    desc:string
};

export type SkillListProps = {
    title:string,
    list:SkillItem[]
};

function SkillItem({title, desc}:SkillItem){
    return <li>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
    </li>
}


export default function SkillList({title, list}:SkillListProps){
    return (
    <div>
        <div className="title">{title}</div>
        <ul>
            {list.map(({title, desc}, key) => <SkillItem key={key} title={title} desc={desc} />)}
        </ul>
    </div>);
}