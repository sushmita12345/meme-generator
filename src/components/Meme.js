import React from "react"
import memesData from "../memesData.js"




export default function Meme() {
    // const [memeImage, getMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function clickHandle(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: [value]
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function memeData() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length )
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        } ))

            
    
    }
    return (
        <main>
        
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={clickHandle}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={clickHandle}
                />

            
                <button 
                    className="form-button" onClick={memeData}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-card top">{meme.topText}</h2>
                <h2 className="meme-card bottom">{meme.bottomText}</h2>
            </div>
        </main>
        
    )
}