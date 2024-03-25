import { navType } from '../script/Nav';
import Icon from './Icon/Icon';
import LinkIcon, { LinkIconData } from "./Links";
import NavButton from './NavButton';

interface HeaderProps{
    links:LinkIconData[],
}

export default function Header({links}: HeaderProps){

    return (
    <div className="row rounded m-0 mb-3">
        <div className='col'>
            <NavButton className="link" type={navType.Main}>
                <h1 className="Name">
                    Jason Ashimine
                </h1>
                <h3 className="Career">
                    Software Developer
                </h3>
            </NavButton>
        </div>
        <div className='col'>
            <div className='d-flex justify-content-end'>
                {links.map((data, key) => <LinkIcon{...data} key={key}/>)}
                <NavButton type={navType.Contact}>
                    <Icon className="link-icon" type="Contact"/>
                </NavButton>
            </div>
            <div className='d-flex justify-content-end'>
                <NavButton className="link" type={navType.Resume}>Resume</NavButton>
                <div className='divider'></div>
                <NavButton className="link" type={navType.About}>About Me</NavButton>              
            </div>
        </div>
    </div>
    );
}