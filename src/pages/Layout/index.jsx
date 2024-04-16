import {
	useCallback,
	useEffect,
} from 'react';
import useCanvas from '../../hooks/useCanvas';
import Agv from '../../agv/Agv';

import { StyledCanvas } from './styledComponent';

const Canvas = () => {
	let character = null;

	const setCanvas = useCallback((canvas) => {
		canvas.width = (window.innerWidth - 120) * 4;
		canvas.height = (window.innerHeight - 48) * 4;
		// eslint-disable-next-line
		character = new Agv(canvas);
		document.addEventListener('keydown', character.handleArrowKeyDown());
		// 주석 제거 금지
		// document.addEventListener('mousedown', e => character.handleMouseDown(e));
		// document.addEventListener('mousemove', character.handleMouseMove());
		// document.addEventListener('mouseup', () => character.handleMouseUp());
		document.addEventListener('wheel', character.handleWheel());
	}, []);

	const canvasRef = useCanvas(setCanvas);

	useEffect(() => {
		return () => {
			character &&
			document.removeEventListener('keydown', character.handleArrowKeyDown());
			document.removeEventListener('wheel', character.handleWheel());
		};
	}, [character]);

	return (
		<div className="Layout">
			<StyledCanvas
				ref={canvasRef}
			/>
		</div>
	);
};

export default Canvas;

// import React, {useRef, useEffect, useCallback} from 'react'; //Canvas와 getContext 사용하기 위해 받아옴
// // import axios from 'axios';
//
// const Canvas = props => {
//   const canvasRef = useRef(null);
//
//   const draw = useCallback(ctx => {
// 		ctx.fillStyle = '#00000';
// 		ctx.beginPath();
//
// 		//path 관련 정보
// 		// beginPath() 새로운 path를 만듭니다
// 		// closePath() path를 닫습니다.
// 		//stroke() 윤곽선을 이어 도형을 그립니다.
// 		// fill() path 내부를 채웁니다
//
// 		//사각형 그리기
// 		// fillRect(x, y, width, height) //색칠된 직사각형 그리기
// 		//strokceRect(x, y, widht, height) // 직사각형 윤곽선 그리기
// 		//cleanRect(x, y, widht, height) //특정 부분을 지운 직사각형
// 		// x, y는 캔버스 좌측 상단의 꼭짓점에서의 상대적 위치를 가리키며, w와 h는 사각형의 크기
//
// 		//원 그리기
// 		// ctx.arc(50, 100, 20, 0, 2*Math.PI)
// 		// arc (x, y, radius, startAngle, endAngle, anticlockwise)
// 		//x,y 위치에 중점을 두면서, 반지름 r을 가지고, startAngle에서 시작해, endAngle에서 끝나며
// 		// 주어진 anticlockwise방향으로 향하는 아치를 그림
//
// 		//moveTo (펜 이동하기)
// 		//moveTo(x,y)
// 		//펜을 x와 y로 지정된 좌표로 옮김
//
// 		//lineTo (선 그리기)
// 		//lineTo(x,y)
// 		//현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그림
//
// 		//moveTo로 어디에서 시작할껀지 정해서 그림 -> lineTo로 선 그림->
//
// 		// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// 		// ctx.moveTo(110, 75);
// 		// ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
// 		// ctx.moveTo(65, 65);
// 		// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
// 		// ctx.moveTo(95, 65);
// 		// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
// 		// ctx.stroke();
//
// 		//선으로만 직사각형 그리기 (가로80, 세로100)
// 		// ctx.moveTo(0, 0)
// 		// ctx.lineTo(80,0)
// 		// ctx.moveTo(80,0)
// 		// ctx.lineTo(80,100)
// 		// ctx.moveTo(80,100)
// 		// ctx.lineTo(0,100)
// 		// ctx.moveTo(0,100)
// 		// ctx.lineTo(0,0)
//
//
// 		// ctx.moveTo(0,40)
// 		// ctx.fillRect(0, 40, 5, 5)
// 		// ctx.
// 		// ctx.lineTo(80,40)
// 		// ctx.fillRect(80, 40, 5, 5)
// 		// ctx.fillRect(200, 40, 5, 5)
// 		// ctx.moveTo(80,40)
// 		// ctx.lineTo(280, 40)
// 		// ctx.fillRect(280, 40, 5, 5)
// 		// ctx.stroke()
//
// 		ctx.moveTo(475, 647);
// 		ctx.fillRect(475,647, 10, 10);
// 		ctx.fillRect(2073,647, 10, 10);
// 		ctx.lineTo(2073, 647);
// 		ctx.moveTo(481, 647);
//
//
// 		ctx.stroke();
// 	}, []);
//
// 	useEffect(() => {
// 		const canvas = canvasRef.current;
// 		const ctx = canvas.getContext('2d');
// 		canvas.width = window.innerWidth;
// 		canvas.height = window.innerHeight;
//
// 		draw(ctx);
// 	}, [draw]);
//
//
//
//   return <canvas ref={canvasRef} {...props}/>;
// };
//
// export default Canvas;
