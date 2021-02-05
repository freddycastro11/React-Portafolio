import React from 'react'
import "./Slider.css"

const slidesInfo = [
    {
        src: "https://github.com/freddycastro11/json-db/blob/master/image/imagen2.png?raw=true", 
        alt: "nutricion",
        des: "Nutrición",
    },
    {
        src: "https://github.com/freddycastro11/json-db/blob/master/image/imagen4.png?raw=true", 
        alt: "nutricion1",
        des: "React Pokedex",
    },
    {
        src: "https://github.com/freddycastro11/json-db/blob/master/image/imagen31.png?raw=true",
        alt: "nutricion2",
        des: "React Tailwind",
    }
]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-des">
            <span> {slide.des} </span>
        </div>
    </div>
))

export default slides