const FULL_IMG_LIST = import.meta.glob<true,string>(`./**/*.{png,jpg,jpeg,PNG,JPEG}`, { import: "default", eager: true, query:"url"});

export function GetImages(key:string){
    return Get(key, FULL_IMG_LIST);
} 

const PROJECT_LIST = import.meta.glob<true, string>("./**/*.json", { import: "default", eager: true, query:"url"});

export function GetProjectData(key:string){
    return Get(key, PROJECT_LIST);
}

function Get(key:string, glob:Record<string, unknown>){
    return Object.entries(glob)
        .filter(([base]) => base.startsWith(`./${key}/`))
        .map(([,dir]) => String(dir));
}


export function GetProject(key:string){
    return {
        ...GetProjectData(key),
        images:GetImages(key),
    }
}