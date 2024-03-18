import { useContext, useEffect } from 'react'

import Header from './components/Header';
import MainPage from './components/Main';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import { Goto, Nav } from "./script/Nav";
import { navType } from './script/Nav';
import Project from './components/Projects/Project';
import NotFound404 from './components/404';
import Modal from './components/Gallery/Modal';
import { StateContext } from './components/ContextProvider';
import { LINKS } from './Project/HeaderData';
import { PROJECT, MAINPAGE_PROPS } from './Project/HeaderData';
import { CloseModal } from './script/Modal';
import CopyRight from './components/CopyRight';


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
    window.addEventListener("popstate", (event):void => {
      if (event.state) {
        dispatch(CloseModal());
        dispatch(Goto(event.state));
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
      <CopyRight/>
    </>
  )
}

export default App