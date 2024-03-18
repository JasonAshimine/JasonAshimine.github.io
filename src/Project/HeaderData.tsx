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
  list: [{ type: "Django"}, {type:"Python"}, {type:"C++"}, {type:"SQL"}]
};


/*
https://github.com/JasonAshimine/Hearthstone-Search

https://jyama.itch.io/color-maze
https://github.com/JasonAshimine/Color-Maze

https://sam325.itch.io/keito-game
https://github.com/Team-Keito/Keito-Yarn-Game

https://jyama.itch.io/nocturne-manor
https://github.com/Danirosestudio/NocturneManor

https://jyama.itch.io/simple-plane
https://github.com/JasonAshimine/Simple-Plane

https://github.com/JasonAshimine/Unnamed-Auto-Battler

https://github.com/JasonAshimine/Web-TD
https://jasonashimine.github.io/Web-TD/
*/

const Projects:ProjectIconProps[] = [{
  id:"Nocturne",
  src:"Nocturne.png",
  logo:"NocturneLogo.png",
  title:"Nocturne Game",
  overlay: "Nocturne Overlay text",
  tools:["Unreal"],
},{
  id:"Keito",
  title:"Keito",
  src:"uJXXSQ.png",
  logo:"KeitoLogo.png",
  overlay: "Nocturne Overlay text",
  tools:["C#", "Unity"],
},{
  id:"WebTD",
  src:"WebTD.png",
  title:"WebTD",
  logo:"WebTDLogo.png",
  overlay: "Overlay text",
  tools:["TypeScript", "CSS"],
},{
  id:"Capstone",
  src:"UnammedAutobattler.png",
  title:"Unamed Auto Battler",
  overlay: "Overlay text",
  tools:["Python", "Django", "SQL"],
},
{
  id:"SimplePlane",
  src:"SimplePlane.png",
  logo:"",
  title:"Simple Plane",
  overlay: "Overlay text",
  tools:["C#", "Unity"],
},{
  id:"ColorMaze",
  src:"ColorMazeDev.png",
  logo:"ColorMazeLogo.png",
  title:"Color Maze",
  overlay: "Overlay text",
  tools:["C#", "Unity"],
}];

type ProjectDB = Record<string, ProjectProps>;

export const PROJECT: ProjectDB = {
  Nocturne: {
    id: "Nocturne",
    title: "Nocturne",
    used: ["Unreal"],
    date: "2024",
    job: "Lead Programmer",
    description: "Description",
    links:[],
    images: GetImages("Nocturne")
  },
  Keito: {
    id: "Keito",
    title: "Keito",
    used: ["Unity"],
    date: "2024",
    job: "Programmer",
    links:["https://sam325.itch.io/keito-game", "https://github.com/Team-Keito/Keito-Yarn-Game"],
    description: "Keito Description",
    images: GetImages("Keito")
  }
};


export const MAINPAGE_PROPS = {
  Proficient,
  Familiar,
  Projects,
};

