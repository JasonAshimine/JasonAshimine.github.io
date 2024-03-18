interface glob{
    [key:string]: string,
}
const FULL_IMG_LIST:glob = import.meta.glob(`./**/*.{png,jpg,jpeg,PNG,JPEG}`, { import: 'default', eager: true, query:"url"});

export function getImages(key:string){
    console.log(FULL_IMG_LIST);
    return Object.entries(FULL_IMG_LIST).filter(([base]) => base.includes(`/${key}/`)).map(([,dir]) => dir);
} 