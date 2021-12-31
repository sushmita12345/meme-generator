import React from "react"
import memesData from "../memesData.js"
import CardMedia from "@material-ui/core/CardMedia";

export default function Meme(props) {
    // const { CardMedia } = MaterialUI
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "https:\/\/i.imgflip.com\/1ihzfe.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const canvas = React.useRef([])
    // const [finalSrc, setFinalSrc] = React.useState(null)

    function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
  
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
          
      }))
      
    }
    

    React.useEffect(() => {
        const ctx = canvas.current.getContext("2d")
        const image = new Image();
        image.crossOrigin = 'anonymous';
        //image.src = meme[memeIndex].url
        image.src = meme.randomImage
        image.onload = () => {
            ctx.drawImage(image, 0, 0, 600, 450)
            // ctx.fillStyle = "black"
            // ctx.fillRect(0, 0, 800, 256 + 80)
            
            //ctx.font = "bold 40px Arial";
            ctx.font = "35px Courier New";
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.strokeStyle = "black"
            ctx.lineWidth = 5
            ctx.strokeText(meme.topText.toUpperCase(), (600 / 2), 60)
            ctx.strokeText(meme.bottomText.toUpperCase(), (600 / 2), 256 + 40 + 50)
            ctx.fillText(meme.topText.toUpperCase(), (600 / 2), 60)
            ctx.fillText(meme.bottomText.toUpperCase(), (600 / 2), 256 + 40 + 50)
            //ctx.Width(meme.topText, (600 / 2), 60)
            //ctx.Width(meme.bottomText, (600 / 2), 256 + 40 + 50)
            
            ctx.stroke();
            
        }
        
    }, [meme.randomImage, canvas, meme.topText, meme.bottomText])

    function clickHandle(event) {
      const {name, value} = event.target
      setMeme(prevState => ({
          ...prevState,
          [name]: value
          
      }))
    }

    function download(){
        const ctx = canvas.current.getContext("2d")
        // var canvas = document.getElementById("canvas");
        var url = canvas.current.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = url;
        link.click();
      }

    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div className="main-container">
                <div className="form">

                    <div className="form-container">
                        <input 
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                            name="topText"
                            value={meme.topText}
                            onChange={clickHandle}
                        />
                        <input 
                            type="text"
                            placeholder="Bottom text"
                            className="form--input"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={clickHandle}
                        />
                    </div>
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                        //onClick={() => setMemeIndex(memeIndex + 1)}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                
                
                <div className="meme">
                    {/* {finalSrc && <CardMedia image={finalSrc} style={{geight: 450, width: 600}} />} */}
                    <canvas ref={canvas} width={600} height={450} className="canvas-image"/>
                    <button className="btn-click" onClick={download}>Download</button>
                    
                    {/* <img ref="image" src={meme.randomImage} className="meme--image" /> */}
                    {/* <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2> */}
                </div>
            </div>
        </main>
    )
}