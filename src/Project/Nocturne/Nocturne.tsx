import Project, { ProjectProps } from "../../components/Projects/Project"
import { ProjectIconProps } from "../../components/Projects/projectIcon";
import { GetImages } from "../ImageList";


/*
id
bg src
logo
title
overlay
tools []

used []
date
job
links[]
description

Implemented features | Learned Skills



showcase
images

*/



interface FullProps extends ProjectProps, ProjectIconProps{
    title:string,
}


const data:FullProps = {
    id:"Nocturne",
    title: "Nocturne Manor",
    
    src:"Nocturne.png",
    tools:["Unreal","UnrealDark"],
    overlay:"",
    images:[],

    date:"2024",
    job:"Lead Programmer",
    used: ["Unreal"],
    description: "Description",
    links:["https://jyama.itch.io/nocturne-manor", "https://github.com/Danirosestudio/NocturneManor"]
}

const images = GetImages(data.id);


export default function Template(){
    return (
        <Project {...data} images={images}>
           <>Hello</>
        </Project>
    );
}