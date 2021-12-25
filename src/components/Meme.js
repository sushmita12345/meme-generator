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

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = res.json()
        setAllMeme(data.data.memes)
    }, [])
    function memeData() {
        
        const randomNumber = Math.floor(Math.random() * allMeme.length )
        const url = allMeme[randomNumber].url
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