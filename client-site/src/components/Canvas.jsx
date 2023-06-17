import React, { useEffect, useRef } from 'react'

const Canvas = ({ stickers }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width = 700;
        context.canvas.height = 400;
        if (stickers && stickers.length) {
            stickers.forEach(url => {
                const image = new Image();
                image.src = url;
                image.onload = () => {
                    const xPos = Math.random() * 525 + 50;
                    const yPos = Math.random() * 250 + 10;
                    context.drawImage(image, xPos, yPos, 100, 100);
                }
            })
        }
        }, [])


    return (
        <canvas ref={canvasRef} />
    )
}

export default Canvas