import { useContext } from "react"
import GalleryImage from "./GalleryImage"
import { StateContext } from "../ContextProvider"
import { OpenModal } from "../../script/Modal";
import Carousel from "./Carousel";
import "./Gallery.css";

export interface GalleryProps{
    list: string[]
}



export default function Gallery({list}: GalleryProps){
    const {dispatch} = useContext(StateContext);

    const onClick = (index:number) => {
        dispatch(OpenModal(<Carousel images={list} index={index} />));
    }

    return (
    <div className="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {list.map((src, key) => 
            <div className="col" key={key}>
                <GalleryImage className="w-100" src={src} onClick={() => onClick(key)}/>
            </div>
        )}
    </div>
    )
}