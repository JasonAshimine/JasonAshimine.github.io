import Gallery from "../Gallery/Gallery";
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


export interface ProjectProps extends Props{
    title:string,
    used: string[],
    date?: string,
    job: string,
    description: string,
    images: string[],
    links:string[],
    id:string
}

export default function Project(props: ProjectProps){
    const {title, date, used, job, description, children, images} = props;

    return (
        <>
        <div className="project">
            <div className="project-head text-center">
                <h1 className="title">{title}</h1>
                <h3>{date ?? ""}</h3>
            </div>
            
            <div className="project-desc">
                <div className="project-desc-subheader d-flex justify-content-center">
                    <div className="label">Job:</div><div className="text">{job}</div>
                    <div className="divider"></div> 
                    <div className="label">Used: </div><div className="text">{used.join()}</div>
                </div>
                <div className="project-desc-body">
                    <p>{description}</p>
                </div>                
            </div>

            <div className="project-features">
                {children}
            </div>

            <div className="project-galary">
                <Gallery list={images}/>
            </div>

        </div>
        </>
    );
}