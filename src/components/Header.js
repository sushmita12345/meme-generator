import React from "react"
import meme from "../images/Troll-Face.png"

export default function Header() {
    return (
        <header className="header">
            
            <img src={meme} className="meme-face"/>
            <h2 className="meme-text">Meme Generator</h2>
            <h4 className="meme-fun">Have Fun 😎</h4>
            
        </header>
    )
}