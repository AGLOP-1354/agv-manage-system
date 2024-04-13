import throttle from '../shared/utils/throttle';
import AgvImages from './agvImages';

const Direction = {
  DOWN: 0,
  UP: 1,
  LEFT: 2,
  RIGHT: 3,
};

const SIZE = 34;
const INITIAL_POSITION = { x: 0, y: 0 };
const MIN_SCALE = 0.1;
const MAX_SCALE = 10;

class Agv {
  constructor(canvas) {
    this.scale = 1;
    this.panning = false;
    this.viewPos = INITIAL_POSITION;
    this.startPos = INITIAL_POSITION;
    this.canvas = canvas;
    this.position = { x: 0, y: 0 };
    this.direction = Direction.DOWN;
    this.ctx = this.canvas.getContext('2d');
    this.runAnimationFrame();
  }

  runAnimationFrame() {
    this.draw();
    requestAnimationFrame(this.runAnimationFrame.bind(this));
  }

  drawStroke() {
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';

    ctx.moveTo(475, 647);
    ctx.lineTo(2073, 647);
    ctx.moveTo(481, 647);
    ctx.fillRect(475,647, 10, 10);
    ctx.fillRect(2073,647, 10, 10);

    ctx.stroke();
  }

  draw() {
    const { x, y } = this.position;
    const image = this.getImageByDirection(0, false);

    if (!this.ctx || !image) {
      return;
    }
    // eslint-disable-next-line no-self-assign
    this.canvas.width = this.canvas.width;
    this.setTransform();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(image, x, y, SIZE, SIZE);
    this.drawStroke();
  }

  getImageByDirection( direction ) {
    const { carImage } = AgvImages;

    switch (direction) {
      default:
        return carImage;
    }
  }

  handleArrowKeyDown() {
    const distance = SIZE;
    const ArrowKeys = [
      {
        code: '38',
        string: 'ArrowUp',
        movement: { x: 0, y: -distance },
        isMoveable: () => this.position.y > 0,
      },
      {
        code: '40',
        string: 'ArrowDown',
        movement: { x: 0, y: distance },
        isMoveable: () => this.position.y < this.canvas.height - SIZE,
      },
      {
        code: '39',
        string: 'ArrowRight',
        movement: { x: distance, y: 0 },
        isMoveable: () => this.position.x < this.canvas.width - SIZE,
      },
      {
        code: '37',
        string: 'ArrowLeft',
        movement: { x: -distance, y: 0 },
        isMoveable: () => this.position.x > 0,
      },
    ];

    const handler = throttle((e) => {
      for (let i = 0; i < ArrowKeys.length; i++) {
        const { code, string, movement, isMoveable } = ArrowKeys[i];
        if ([code.toString(), string].includes(e.key) && isMoveable()) {
          this.position.x += movement.x;
          this.position.y += movement.y;
        }
      }
    }, 500);

    return e => handler(e);
  }

  setTransform() {
    const canvasRef2 = this.canvas;
    const context = canvasRef2.getContext('2d');
    context.setTransform(
      this.scale,
      0,
      0,
      this.scale,
      this.viewPos.x,
      this.viewPos.y
    );
  }

	// handleMouseDown (e) {
  //   if (!e || !e) return;
  //   const { offsetX, offsetY } = e;
  //   e.preventDefault();
  //   this.startPos = {
  //     x: offsetX - this.viewPos.x,
  //     y: offsetY - this.viewPos.y,
  //   };
  //   this.panning = true;
	// };

	// handleMouseUp() {
  //   this.panning = false;
	// };

	// handleMouseMove () {
	// 	const handler = (e) => {
  //     if (!e || !e) return;
  //     const { offsetX, offsetY } = e;
  //     e.preventDefault();
  //     if (!this.panning) {
  //       return;
  //     }
  //     this.viewPos = {
  //       x: offsetX - this.startPos.x,
  //       y: offsetY - this.startPos.y,
  //     };
  //     this.draw();
  //   };
  //   return e => handler(e);
	// };

	handleWheel () {
		const handler = throttle((e) => {
      if (!e || !e.target || e.target.localName !== 'canvas') return;
      const { offsetX, offsetY } = e;
      e.preventDefault();
      const xs = (offsetX - this.viewPos.x) / this.scale;
      const ys = (offsetY - this.viewPos.y) / this.scale;
      const delta = -e.deltaY;
      const newScale =
        delta > 0 ? this.scale * 1.2 : this.scale / 1.2;

      if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
        this.scale = newScale;
        this.viewPos = {
          x: offsetX - xs * this.scale,
          y: offsetY - ys * this.scale,
        };
      }
      this.draw();
    }, 100);

    return e => handler(e);
	}
}

export default Agv;
