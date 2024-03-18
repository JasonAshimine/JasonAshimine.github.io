import Project from "../../components/Projects/Project"
import { GetImages } from "../ImageList";


const data = {
    id:"Nocturne",
    title: "Nocturne Manor",
    
    src:"Nocturne.png",
    tools:["Unreal","UnrealDark"],

    date:"2024",
    job:"Lead Programmer",
    used: ["Unreal"],
    description: "Description"
}

const images = GetImages(data.id);

export default function Template(){
    return (
        <Project {...data} images={images}>
           <>Hello</>
        </Project>
    );
}