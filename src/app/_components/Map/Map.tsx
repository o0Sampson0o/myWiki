"use client";
import { useRef, useEffect } from "react";

export default function Map() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        let animationFrameId =  0;
        let frameCount = 0;

        const render = () => {
            draw(ctx, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
            frameCount++;
        }
        setup(ctx);
        render();
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef}></canvas>
}


function setup(ctx: RenderingContext2D) {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function draw(ctx: RendereingContext2D, frameCount = 0) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()    
}
