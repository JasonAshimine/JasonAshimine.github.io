import { Props } from "../Types";

export interface GalleryImageProps extends Props{
    src: string,
    alt?: string,
    onClick: React.MouseEventHandler<HTMLImageElement>
}


export default function GalleryImage({src, alt, className, onClick}:GalleryImageProps){
    return (
        <>
            <img className={className} src={src} alt={alt ?? src.split('/').pop()} onClick={onClick}/>
        </>        
    )
}