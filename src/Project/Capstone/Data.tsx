/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";

const Skill: SkillData = {
    Learned:[
        {title:"Django", desc:"Server backend for multiplayer and API backend."},
        {title:"SQL", desc:"Data storage, Queries, and Data relationships."},
        {title:"Sass/CSS", desc:"Data storage, Queries, and Data relationships."},

    ],
    Features:[
        {title:"Combat", desc:"Regenerating Health & short invulnerability after hit"},
        {title:"Enemy", desc:"Scaling Enemy health & ability to split to smaller on death"},    
        {title:"Menu", desc:"UI/UX Settings SFX & Music with persistant settings"},
        {title:"Partical System", desc:"Animated title screen"},
        {title:"Audio system", desc:"SFX & Music options"},
    ]
}
/*
Created a web based auto battler game.
Animated Pixel sprites / combat with event based sequencing.
Game loop is Drafting then Combat with Randomly generated enemies.
Item tier system, tier leveling system and scaling tier cost.
Randomly generated shop with scaling item rarity based on tier.
Speed control to accelerate animations (Makes combat faster).
Uses API interface to update clients in SPA.


*/

const description = [
    "Fullstack - Auto Battler built to be like super pet auto battle.",
    " Where player data is stored & re-used for future fights.",
    "CSS animations & used async timing to sequence animations.",
    "Item shop, Scaling tiers, Scaling monsters."
].join(" ");

const id = "Capstone";

const Data: ProjectProps = {
    id,
    title:"Unnamed Auto Battler",
    used: ["Python", "Django", "HTML"],
    date: "Nov 2023",
    links:["https://github.com/JasonAshimine/Unnamed-Auto-Battler"],
    job:"Solo Developer / Programmer / Game Designer",
    description,
    children: GetSkills(Skill),
    images:GetImages(id),
};

export default Data;