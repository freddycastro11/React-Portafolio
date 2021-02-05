import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Freddy Castro</h1>
                <p>El Salvador</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>Freddyenrique2000@gmail.com</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Desing by Freddy Castro
                </div>
                <div className="sns-links">
                    <a href="https://github.com/freddycastro11" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.twitch.tv/ifreddycast" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitch twitch"></i>
                    </a>
                    <a href="https://www.instagram.com/ifred.exe/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
