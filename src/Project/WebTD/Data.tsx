/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";


//TODO:
const Skills: SkillData = {
    Learned:[
        // {title:"Unity", desc:"Overall interfaces and workflow patterns"},
        // {title:"Scriptable Objects", desc:"Allowed for more modular and standardized objects."},
        // {title:"Unity Editor", desc:"Custom Unity Inspector for debugging and user friendly tooling"},
        // {title:"Event Channels", desc:"Applied new Event channel Scriptable objects to remove singleton dependance"},
        // {title:"Algorithm", desc:"Used Depth First Search to Generate Random Mazes"},
        // {title:"Gimp", desc:"Created custom art assets for UI and gameplay."},
    ],
    Features:[
        // {title:"Game Design", desc:"Used restriction from no text and minmal user feedback to create compelling experience."},
        // {title:"Dynamic Visual", desc:"Changing Colors based on distance to walls."},
        // {title:"Accessibility", desc:"Customizable colors and Audio navigation to assist color blindness."},
        // {title:"Dynamic Audio", desc:"Dynamic stereo based on side distance to wall and Pitch based on distance to end."},
    ]
};

const description = "A quick prototype tower defense game, built with TypeScript for robust gameplay and expandability."
+ " Features include animated sprites, vector-based AI, and strategic tower placement. "
+ "Developed over winter break, it's a showcase of OOP, Canvas technology, and efficient game design.";

const Data: ProjectProps = {
    id:"WebTD",
    title:"WebTD",
    used: ["HTML", "TypeScript"],
    date: "Dec 2023",
    links:["https://github.com/JasonAshimine/Web-TD","https://jasonashimine.github.io/Web-TD/"],
    job:"Programmer/Game Designer/All",
    description,
    images:GetImages("WebTD"),
    children: GetSkills(Skills),
};

export default Data;