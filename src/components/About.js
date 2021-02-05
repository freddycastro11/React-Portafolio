import React from 'react'
import "./About.css"
import Perfil from "../media/perfil.jpeg"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-des">
                <h3>Conoce un poco más de mí. | Know a little more about me. </h3>
                <p>Me llamo Freddy tengo 20 años soy estudiante de Ingeniería en sistemas, me encanta el diseño y hacer cosas llamativas y que se vean bien y elegante, estoy aprendiendo de diseño UX/IU y de React Js un gusto. | My name is Freddy I'm 20 years old I'm a systems engineering student, I love design and making things eye-catching and that look good and elegant, I'm learning UX/IU design and React Js a pleasure.</p>
            </div>
            <div className="about-img">
                <img width="40%" height="50%" right="40%" src={Perfil} alt="Perfil" />
            </div>
        </div>
    )
}

export default About
