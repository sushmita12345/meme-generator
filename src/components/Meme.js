import React from "react"


export default function Meme(props) {
    // const [memeImage, getMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https:\/\/i.imgflip.com\/m78d.jpg"
    })

    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        // async function getMeme() {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = res.json()
        //     setAllMemes(data.data.memes)
        // }

        // getMeme()
        
    }, [])
    function memeData() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        } ))

    }

    function clickHandle(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
            
        }))
    }

    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div className="main-container">
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
            </div>
        </main>
        
    )
}