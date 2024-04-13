import React,{ useRef, useState, useEffect } from 'react';

const Canvas = () =>{
    const canvasRef = useRef(null); //useRef사용
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;

        const context = canvas.getContext('2d');
        context.strokeStyle = 'black';
        context.lineWidth = 2.5;
        contextRef.current = context;

        setCtx(context);
    },[]);

    const startDrawing = () => {
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        setIsDrawing(false);
    };

    const drawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        if (ctx){
            if (!isDrawing) {
                ctx.beginPath();
                ctx.moveTo(offsetX, offsetY);
            } else {
                ctx.lineTo(offsetX,offsetY);
                ctx.stroke();
            }
        }
    };

    // const draw = ctx => {
    //     ctx.fillStyle = "#00000"
    //     ctx.beginPath()
    //     ctx.moveTo(0,0)
	  //   ctx.lineTo(300,0)
	  //   ctx.stroke()
    // }

    return (
        <div className="canvas_wrap">
            <canvas
                ref = {canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={drawing}
                onMouseLeave={finishDrawing}
            />
        </div>
    );
};

export default Canvas;

//20240412 원 애니메이션
// import React,{useRef, useEffect} from "react";

// const Canvas = props => {
//     const canvasRef = useRef(null)

//     const draw = (ctx,frameCount) => {
//         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//         ctx.fillStyle = '#00000'
//         ctx.beginPath()
//         ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//         ctx.moveTo(100,0)
//         ctx.strokeRect(100,100,30,10)
//         // ctx.arc(200, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)

//         ctx.fill()
//     }

//     useEffect(() =>{
//         const canvas = canvasRef.current
//         const context = canvas.getContext('2d')
//         let frameCount = 0
//         let animationFrameID

//         const render = () => {
//             frameCount++
//             draw(context, frameCount)
//             animationFrameID = window.requestAnimationFrame(render)
//         }
//         render()

//         return () => {
//             window.cancelAnimationFrame(animationFrameID)
//         }
//     },[draw])
//     return <canvas ref={canvasRef} {...props}/>
// }

// export default Canvas
