import { ReactElement } from "react";
import Gallery from "../Gallery/Gallery";
import { IconType } from "../Icon/Icon";
import { Props } from "../Types";

/*
project title
Dates

used 
job

Description
- Breif description
- what i worked on 
- Release info 
- awards 

mechanincs showcase
- title
- gif

Features: 
Learned Skills

Images galary
*/

type LinkType = string|ReactElement;

export interface ProjectProps extends Props{
    title:string,
    used: IconType[],
    date?: string,
    job: string,
    description: string,
    images: string[],
    links:LinkType[],
    id:string,
}



interface href{
    href:string
}


function Itch({href}:href){
    return (
        <div>
            Play Game: <a href={href}>Itch.io</a>.      
        </div>
    );
}

function Github({href}:href){
    return (<div>
        Source Code: <a href={href}>Github</a>
    </div>)
}


function Link({href}:{href:LinkType}){
    if(typeof href != "string")
        return href;

    if(href.includes("github.com"))
        return <Github href={href} />

    if(href.includes("itch.io"))
        return <Itch href={href} />

    return <a href={href}>{href}</a>
}



export default function Project(props: ProjectProps){
    const {title, date, used, job, description, children, images, links} = props;

    return (
        <>
        <div className="project">
            <div className="project-head text-center">
                <h1 className="title">{title}</h1>
                <h3>{date ?? ""}</h3>
            </div>
            
            <div className="project-desc">
                <div className="project-desc-subheader d-flex justify-content-center">
                    <span className="text">{job}</span>
                    <span className="divider"></span> 
                    <span className="text">{used.join()}</span>
                </div>
                <div className="project-desc-body">
                    {description}
                </div>       
            </div>

            <div className="project-features">
                {children}
            </div>

            <div className="project-desc-links d-flex flex-column align-items-center">
                {links.map((href, key) => <Link href={href} key={key} />)}
            </div>

            <div className="project-galary">
                <Gallery list={images}/>
            </div>

        </div>
        </>
    );
}