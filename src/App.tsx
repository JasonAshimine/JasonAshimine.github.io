import { useContext, useEffect } from 'react'

import Header from './components/Header';
import { LinkIconData } from './components/Links';
import MainPage from './components/Main';
import { ProjectIconProps } from './components/Projects/projectIcon';

import {SkillListData} from './components/Skills/SkillList';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import { Nav } from "./script/Nav";
import { navType } from './script/Nav';
import Project, { ProjectProps } from './components/Projects/Project';
import NotFound404 from './components/404';
import Modal from './components/Gallery/Modal';
import { StateContext } from './components/ContextProvider';
import { getImages } from './Project/ImageList';



  

const LINKS: LinkIconData[] = [
  {
    type:"Github",
    href:"https://github.com/JasonAshimine",
  },  {
    type:"LinkedIn",
    href:"https://www.linkedin.com/in/jason-ashimine/",
  }
]

const Proficient: SkillListData = {
  title: "Proficient",
  list: [
    {type:"C#"},
    {type:"Unity"},
    {type:"Unreal", name:"Unreal Engine"},
    {type:"TypeScript", name:"Type Script"},
  ]
}

const Familiar: SkillListData = {
  title: "Familiar",
  list: [{
    type:"Github"
  }]
}

const Projects:ProjectIconProps[] = [{
  id:"Nocturne",
  src:"Nocturne.png",
  text:"Nocturne Game",
  alt:"Nocturne",
  tools:["Unreal","UnrealDark"],
},{
  id:"Nocturne",
  src:"Title.png",
  text:"Nocturne Game",
  alt:"Nocturne",
  tools:["Unity", "UnityDark"],
},{
  id:"Keito",
  src:"uJXXSQ.png",
  text:"Keito",
  alt:"Nocturne",
  tools:["JavaScript", "TypeScript"],
},{
  id:"Nocturne",
  src:"Nocturne.png",
  text:"Nocturne Game",
  alt:"Nocturne",
  tools:["C#", "Python"],
}];


interface ProjectDB {
  [key:string]: ProjectProps
}


// ProjectProps extends Props{
//   title:string,
//   used: string[],
//   date?: string,
//   job: string,
//   description: string,
//   images: string[],
// }



const PROJECT:ProjectDB = {
  Nocturne:{
    id:"Nocturne",
    title: "Nocturne",
    used: ["Unreal"],
    date:"2024",
    job:"Lead Programmer",
    description: "Description",
    images:getImages("Nocturne")
  },
  Keito:{
    id:"Keito",
    title: "Keito",
    used: ["Unity"],
    date:"2024",
    job:"Programmer",
    description: "Keito Description",
    images:getImages("Keito")
  }
}



const MAINPAGE_PROPS = {
  Proficient,
  Familiar,
  Projects,
}


function GetProjectData(nav:Nav) : React.ReactElement{
  if(nav.data == undefined || !(nav.data in PROJECT))
    return <NotFound404 />;
  
  return (<Project {...(PROJECT[nav.data] || {})}><p>Cool Stuff here hopefully</p></Project>)
}


function NavDecider(nav:Nav) {
  switch(nav.type){
    case navType.Main: return (<MainPage {...MAINPAGE_PROPS} />);
    case navType.Contact: return (<Contact />);
    case navType.Resume: return (<Resume />);
    case navType.About: return (<About />);
    case navType.Project: return GetProjectData(nav);

    default: return <NotFound404 />;
  }
}

function App() {
  const {state, dispatch} = useContext(StateContext);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      if (event.state) {
        dispatch({type:"Goto", nav:event.state});
      }
    });

    if(!window.history.state){
      window.history.replaceState({type:navType.Main},"");
    }

  }, [dispatch]);

  return (
    <>
      <Modal/>
      <div className='container'>
        <Header links={LINKS} />
        {NavDecider(state.nav)}
      </div>
    </>
  )
}

export default App