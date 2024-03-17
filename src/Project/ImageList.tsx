interface glob{
    [key:string]: string,
}
const FULL_IMG_LIST:glob = import.meta.glob(`./**/*.{png,jpg,jpeg,PNG,JPEG}`, { import: 'default', eager: true, query:"url"});

export function getImages(key:string){
    return Object.values(FULL_IMG_LIST).filter((dir) => dir.includes(`/Project/${key}/`));
} 