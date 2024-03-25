/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";

const Skills: SkillData = {
    Learned:[
        {title:"Unity", desc:"Overall interfaces and workflow patterns"},
        {title:"Scriptable Objects", desc:"Allowed for more modular and standardized objects."},
        {title:"Unity Editor", desc:"Custom Unity Inspector for debugging and user friendly tooling"},
        {title:"Event Channels", desc:"Applied new Event channel Scriptable objects to remove singleton dependance"},
        {title:"Algorithm", desc:"Used Depth First Search to Generate Random Mazes"},
        {title:"Gimp", desc:"Created custom art assets for UI and gameplay."},
    ],
    Features:[
        {title:"Game Design", desc:"Used restriction from no text and minmal user feedback to create compelling experience."},
        {title:"Dynamic Visual", desc:"Changing Colors based on distance to walls."},
        {title:"Accessibility", desc:"Customizable colors and Audio navigation to assist color blindness."},
        {title:"Dynamic Audio", desc:"Dynamic stereo based on side distance to wall and Pitch based on distance to end."},
    ]
};

const description = "Experimental Color Maze offers a unique maze navigation experience, relying solely on color cues in a minimalist design."
 + "This Unity-based game teaches through sensory reduction and escalating challenges, featuring dynamic audio and minimalistic visuals.";


const Data: ProjectProps = {
    id:"ColorMaze",
    title:"Color Maze",
    used: ["Unity"],
    date: "Dec 2023",
    links:["https://github.com/JasonAshimine/Color-Maze", <iframe frameBorder="0" src="https://itch.io/embed/2382757?linkback=true&amp;dark=true" width="552" height="167"><a href="https://jyama.itch.io/color-maze">Color Maze by Jyama</a></iframe>],
    job:"Programmer/Game Designer/All",
    description,
    images:GetImages("ColorMaze"),
    children:GetSkills(Skills)
};

export default Data;