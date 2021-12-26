import React from "react"
import memeFace from "../images/Troll-Face.png"

export default function Header(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            
                
            <img src={memeFace} className="meme-face"/>
            <h2 className="meme-text">Meme Generator</h2>
            
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            {/* <h4 className="meme-fun">Have Fun 😎</h4> */ }
            {/* <header className="header"> */}
            {/* </header> */}
        </nav>
    )
}