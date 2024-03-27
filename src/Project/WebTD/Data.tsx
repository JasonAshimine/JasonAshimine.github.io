/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";


//TODO:
const Skills: SkillData = {
    Learned:[
        {title:"Github Workflow", desc:"Automatically build and deploy webpage on Github pages."},
        {title:"Sprites", desc:"Leveraged Canvas and Sprite sheets to dynamically render animation"},
        {title:"Game Engine", desc:"Built core engine based on inheritance pattern, Vectors, and update loops."},
        {title:"Rendering", desc:"Implemented Overlayed Canvas to reduce redraws for increased performance."},
    ],
    Features:[
        {title:"OOP Design", desc:"Used OOP pattern to allow expandability and easy intergartion"},
        {title:"Game Design", desc:"Automatic targeting and pathing using vectors for robust implementation."},
        {title:"Vectors", desc:"Implemented Vector based math for performance and easier "},
        {title:"Expandability", desc:"Uses inheritance pattern and JSON data to configure gameobjects."},
    ]
};

const description = "A quick prototype tower defense game, built with TypeScript for robust gameplay and expandability."
+ " Features include animated sprites, vector-based math, and strategic tower placement. "
+ "Developed over winter break, it's a prototype for web based game engine and efficient game design.";

const links = <div>    
    <div className="text-center">
        <a href="https://github.com/JasonAshimine/Web-TD">Play Game</a>
    </div>
    <div className="text-center">
        Source Code: <a href="https://github.com/JasonAshimine/Web-TD">Github</a>
    </div>
</div>


const Data: ProjectProps = {
    id:"WebTD",
    title:"WebTD",
    used: ["HTML", "TypeScript"],
    date: "Dec 2023",
    links,
    job:"Solo Developer / Programmer",
    description,
    images:GetImages("WebTD"),
    children: GetSkills(Skills),
};

export default Data;