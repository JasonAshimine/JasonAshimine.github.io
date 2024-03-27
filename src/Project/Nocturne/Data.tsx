/* eslint-disable react-refresh/only-export-components */
import { ProjectProps } from "../../components/Projects/Project";
import { SkillData } from "../GetSkills";
import { GetSkills } from "../GetSkills";
import { GetImages } from "../ImageList";

const Skill: SkillData = {
    Learned:[
        {title:"Unreal", desc:"Quickly picked up Unreal to become core member and programmer leader."},
        {title:"Shaders", desc:"Learned Unreal shader to produce border highlighting, flickering/dying fireplace, and vertex animations."},
        {title:"Performance", desc:"Optimized assets to reduce draw calls by 40%, reduced frame time by 20% and increased memory efficiency by 50%."},
        {title:"Modeling", desc:"Learned to model in Engine, fixed imported models normal, and break models for animation."},
        {title:"Composition", desc:"Utilized reusuable components to quickly prototype new features and ideas within tight deadlines."},
        {title:"UI", desc:"Learned Unreal Widget system to build dynamic scalling components."},
    ],
    Features:[
        {title:"Interaction", desc:"Created robust interaction system with highlighting using interfaces and delegates."},
        {title:"Piano", desc:"Fully interactive Piano using instance static meshes and vertex animations for performance."}, 
        {title:"Puzzle", desc:"Produced modular puzzle components to allow for quicker development and reusability."},
        {title:"Hint System", desc:"Audio and Visual Hint system to allow players to more easily progress."},
        {title:"Data Structure", desc:"Designed implementations to use Data Assets and Structs to allow for in editor configurations."},
    ]
}

const description = 
    `As Lead Programmer for Nocturne Manor, I spearheaded the development of a musical adventure game that captivated audiences and judges alike, securing the title of Game Jam Winner and People's Choice. 
    Our project triumphed at a 10-day game jam, earning accolades for its emotional depth, innovation, and exceptional sound design, ultimately winning the People's Choice Award.`;

const links = <div>
    <iframe frameBorder="0" src="https://itch.io/embed/2461494?dark=true" width="552" height="167"><a href="https://jyama.itch.io/nocturne-manor">NOCTURNE MANOR (Demo) by Jyama, danirosestudio, andy_hilaire, cchbxg, Romeo Varga, thesilverfall, He4thriley, archmayhem, mmcgeehan1128</a></iframe>
    <div className="text-center">
        Source Code: <a href="https://github.com/Danirosestudio/NocturneManor">Github</a>
    </div>
</div>



const Data: ProjectProps = {
    id:"Nocturne",
    title:"Nocturne Manor",
    used: ["Unreal"],
    date: "2024",
    links,
    job: "Lead Programmer",
    description,
    children: GetSkills(Skill),
    images:GetImages("Nocturne"),
};

export default Data;