/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";

const Skill: SkillData = {
    // Learned:[
    //     {title:"Unity", desc:"Overall interfaces and workflow patterns"},
    //     {title:"Singleton", desc:"Also learned better state management / persistent Scenes"},
    //     {title:"Object pooling", desc:"Bullets are object pooled & returned to pool when offscreen / hit"},
    //     {title:"Saving", desc:"Saved Settings and High score using PlayerPref"},
    //     {title:"Particle system", desc:"Used to animate the background of the title screen."},
    //     {title:"Prefabs", desc:"Prefab for core components bullets, planes, enemies, and UI components."},
    // ],
    // Features:[
    //     {title:"Combat", desc:"Regenerating Health & short invulnerability after hit"},
    //     {title:"Enemy", desc:"Scaling Enemy health & ability to split to smaller on death"},    
    //     {title:"Menu", desc:"UI/UX Settings SFX & Music with persistant settings"},
    //     {title:"Partical System", desc:"Animated title screen"},
    //     {title:"Audio system", desc:"SFX & Music options"},
    // ]
}

const Data: ProjectProps = {
    id: "Keito",
    title: "Keito",
    used: ["Unity"],
    date: "2024",
    job: "Programmer",
    links:["https://sam325.itch.io/keito-game", "https://github.com/Team-Keito/Keito-Yarn-Game"],
    description: "Keito Description",
    children:GetSkills(Skill),
    images: GetImages("Keito")
};

export default Data;