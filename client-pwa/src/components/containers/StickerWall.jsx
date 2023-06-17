import Sticker from "../elements/Sticker";
import React, { useEffect, useRef } from 'react'

const StickerWall = ({ stickers }) => {
    const canvasRef = useRef(null);
     useEffect(() => {
        const canvas = canvasRef.current
         const context = canvas.getContext('2d')
         context.canvas.width = 900;
         context.canvas.height = 500;

         stickers.forEach(url => {
            const image = new Image();
             image.src = url;

             image.onload = () => {
                 console.log(image.src);
                 
                const xPos = Math.random() * 625 + 50;
                 const yPos = Math.random() * 350 + 10;
                 console.log(xPos, yPos);
                context.drawImage(image, xPos, yPos, 150, 150);
             }
         })
    }, [])

    return (
        <canvas ref={canvasRef} />
    )
}

export default StickerWall;