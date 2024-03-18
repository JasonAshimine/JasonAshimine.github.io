/* eslint-disable react-refresh/only-export-components */
import { LinkIconData } from "../components/Links";
import { ProjectProps } from '../components/Projects/Project';
import { ProjectIconProps } from '../components/Projects/projectIcon';
import { SkillListData } from "../components/Skills/SkillList";
import { GetImages } from "./ImageList";

export const LINKS: LinkIconData[] = [
  {
    type: "Github",
    href: "https://github.com/JasonAshimine",
  }, {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-ashimine/",
  }
];

const Proficient: SkillListData = {
  title: "Proficient",
  list: [
    { type: "C#" },
    { type: "Unity" },
    { type: "Unreal", name: "Unreal Engine" },
    { type: "TypeScript", name: "Type Script" },
  ]
};

const Familiar: SkillListData = {
  title: "Familiar",
  list: [{
    type: "Github"
  }]
};


// HS Card Search

// Capstone project
// Web TD

const Projects:ProjectIconProps[] = [{
  id:"Nocturne",
  src:"Nocturne.png",
  title:"Nocturne Game",
  overlay: "Nocturne Overlay text",
  tools:["Unreal","UnrealDark"],
},{
  id:"Keito",
  title:"Keito",
  src:"uJXXSQ.png",
  overlay: "Nocturne Overlay text",
  tools:["C#", "Unity"],
},{
  id:"WebTD",
  src:"WebTD.png",
  title:"WebTD",
  overlay: "Overlay text",
  tools:["TypeScript", "JavaScript"],
},{
  id:"Capstone",
  src:"SimplePlane.png",
  title:"Unamed Auto Battler",
  overlay: "Overlay text",
  tools:["Python", "Django", "SQL"],
},
{
  id:"SimplePlane",
  src:"SimplePlane.png",
  title:"Simple Plane",
  overlay: "Overlay text",
  tools:["C#", "Unity"],
},{
  id:"ColorMaze",
  src:"ColorMazeDev.png",
  title:"Color Maze",
  overlay: "Overlay text",
  tools:["C#", "Unity"],
}

];

type ProjectDB = Record<string, ProjectProps>;

export const PROJECT: ProjectDB = {
  Nocturne: {
    id: "Nocturne",
    title: "Nocturne",
    used: ["Unreal"],
    date: "2024",
    job: "Lead Programmer",
    description: "Description",
    images: GetImages("Nocturne")
  },
  Keito: {
    id: "Keito",
    title: "Keito",
    used: ["Unity"],
    date: "2024",
    job: "Programmer",
    description: "Keito Description",
    images: GetImages("Keito")
  }
};


export const MAINPAGE_PROPS = {
  Proficient,
  Familiar,
  Projects,
};

