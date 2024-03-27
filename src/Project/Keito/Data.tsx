/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";

const Skill: SkillData = {
    Learned:[
        {title:"Shaders", desc:"Built Cel Shader using Unity Shader Grapth to provide catoon effect and hard edge shadows."},
        {title:"Modeling", desc:"Learned basic modeling and UV unwrapping to create Cat model for game."},
        {title:"Physics", desc:"Produced Yarn thrower with physics trajectory with realistic hit indicator."},
        {title:"Post Processing", desc:"Used Post processing effect to create Max size ball glow effect."},
        {title:"Animation", desc:"Used Unity Animation to build animated score and UI elements."},
    ],
    Features:[
        {title:"Physics", desc:"Game play built around physics engine to provide rewarding billards effects."},
        {title:"Interaction", desc:"Built the core interaction system for yarn combine, yarn shrink, and cat score system."},
        {title:"Gamepad Support", desc:"Intergrated Gamepad support for UI / gameplay. Created component to handle UI focus & easy input intergration."},
        {title:"Composition", desc:"Produced components to be easy to modify and modular allowing designer to build in editor."},
    ]
}


const description = 
`Keito is a serene game that combines the whimsy of a cat's curiosity with the physics of gravity and momentum. 
Developed during a Game Jam, this Unity URP project showcases skills in programming, cel shading, basic modeling, and interactive gamepad-supported elements, culminating in a playful experience where every yarn ball thrown has a story.`;

const links = <div>
    <iframe frameBorder="0" src="https://itch.io/embed/2531244?dark=true" width="552" height="167"><a href="https://sam325.itch.io/keito-game">Keito Game by Sam325, Light with Blocks, Jyama, DasongJin, ravalmania, jaca2808, chloekwok711, MrJBRPG</a></iframe>
    <div className="text-center">
        Source Code: <a href="https://github.com/Team-Keito/Keito-Yarn-Game">Github</a>
    </div>
</div>


const Data: ProjectProps = {
    id: "Keito",
    title: "Keito",
    used: ["Unity"],
    date: "2024",
    job: "Programmer",
    links,
    description,
    children:GetSkills(Skill),
    images: GetImages("Keito")
};

export default Data;