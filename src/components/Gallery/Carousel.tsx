import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { StateContext } from "../ContextProvider";
import { CloseModal } from "../../script/Modal";


interface IndicatorsProps{
  index: number,
  active:boolean,
  className?:string,
  onClick?:MouseEventHandler,
}

function Indicators({index, active, className, onClick}: IndicatorsProps){
  className += active ? " active" : "";

  return (<button type="button" data-bs-target="" data-bs-slide-to={index} className={className} aria-current={active} aria-label="Slide 1" onClick={onClick}></button>)
}

interface ItemProps{
  active:boolean,
  src:string,
  alt?:string,
  onClick?:MouseEventHandler,
}

function Item({active, src, alt, onClick}: ItemProps){
  return (
  <div className={`carousel-item ${active ? 'active':''}`}>
    <img src={src} className="d-block w-100" alt={alt} onClick={onClick} />
  </div>
  );
}

interface CarouselProps{
  images:string[],
  index:number
}

export default function Carousel(props: CarouselProps){
  const {images, index} = props;
  const [currentIndex, setIndex] = useState(index);

  const {dispatch} =  useContext(StateContext);

  useEffect(() => {
    setIndex(index);
  }, [index])

  useEffect(() => {
    function EventHandler(e:globalThis.KeyboardEvent){
      if(e.code == "Escape") dispatch(CloseModal());
    } 

    window.addEventListener("keyup", EventHandler);

    return () =>{
      window.removeEventListener("keyup", EventHandler);
    }

  },[dispatch])


  const Next = () => setIndex((currentIndex+1) % images.length);
  const Prev = () => setIndex((currentIndex-1 + images.length)%images.length);

  const handleNav = (index:number) => setIndex(index);


  return(
    <div id="carouselExampleIndicators" className="carousel slide w-100 h-100">
      <div className="carousel-indicators">
        {images.map((_,key) => <Indicators className="bg-light" key={key} index={key} active={key == currentIndex} onClick={() => handleNav(key)}/>)}
      </div>
      <div className="carousel-inner h-100 d-flex align-items-center">
        {images.map((src,key) => <Item key={key} src={src} active={key == currentIndex}/>)}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={Prev}>
      <i className="bi bi-chevron-left fs-1"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={Next}>
        <i className="bi bi-chevron-right fs-1"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}