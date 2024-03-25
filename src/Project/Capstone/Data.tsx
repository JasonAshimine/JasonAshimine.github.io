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

const SimplePlaneData: ProjectProps = {
    id:"SimplePlane",
    title:"Simple Plane",
    used: ["Unity"],
    date: "Nov 2023",
    links:["https://github.com/JasonAshimine/Simple-Plane", <iframe frameBorder="0" src="https://itch.io/embed/2362853?dark=true" width="552" height="167"><a href="https://jyama.itch.io/simple-plane">Simple Plane by Jyama</a></iframe>],
    job:"Programmer/Game Designer/All",
    description:"An introductory Unity project completed in two days, featuring a full game loop and essential game development features. Highlights include Singleton pattern for state management, object pooling for bullets, PlayerPref for data saving, and engaging audio and particle systems. The game offers SFX, high score tracking, enemy dynamics, health regeneration, and an animated title screen.",
    children: GetSkills(Skill),
    images:GetImages("SimplePlane"),
};

export default SimplePlaneData;