/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */

const E = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

class Wave {
  phase = 0;

  offset = 0;

  frequency = 0.001;

  amplitude = 1;

  constructor(e: Partial<Pick<Wave, 'phase' | 'offset' | 'frequency' | 'amplitude'>>) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Node {
  x = 0;

  y = 0;

  vy = 0;

  vx = 0;
}

class Line {
  spring = 0.1;

  friction = 0.01;

  nodes: Node[] = [];

  // eslint-disable-next-line no-unused-vars
  constructor(e: { spring: number }, private pos: { x: number; y: number }) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const t = new Node();
      t.x = this.pos.x;
      t.y = this.pos.y;
      this.nodes.push(t);
    }
  }

  update() {
    let { spring } = this;
    let node = this.nodes[0];

    node.vx += (this.pos.x - node.x) * spring;
    node.vy += (this.pos.y - node.y) * spring;

    let prevNode: Node;
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];

      if (i > 0) {
        prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let currNode;
    let nextNode;
    let { x } = this.nodes[0];
    let { y } = this.nodes[0];

    ctx.beginPath();
    ctx.moveTo(x, y);

    let i;
    for (i = 1; i < this.nodes.length - 2; i++) {
      currNode = this.nodes[i];
      nextNode = this.nodes[i + 1];
      x = 0.5 * (currNode.x + nextNode.x);
      y = 0.5 * (currNode.y + nextNode.y);
      ctx.quadraticCurveTo(currNode.x, currNode.y, x, y);
    }
    currNode = this.nodes[i];
    nextNode = this.nodes[i + 1];
    ctx.quadraticCurveTo(currNode.x, currNode.y, nextNode.x, nextNode.y);

    ctx.stroke();
    ctx.closePath();
  }
}

export const renderCanvas = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  const ctx: CanvasRenderingContext2D = canvas!.getContext('2d')!;
  let lines: Line[] = [];
  const pos = { x: 0, y: 0 };
  const wave = new Wave({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  let running = true;
  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  resizeCanvas();

  function animate() {
    if (running) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(wave.update())},90%,50%,0.25)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < E.trails; i++) {
        const line = lines[i];
        line.update();
        line.draw(ctx);
      }
      window.requestAnimationFrame(animate);
    }
  }

  function bindMouseMove(event: Event) {
    function drawLine() {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }, pos));
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function move(e: any) {
      e.preventDefault();
      if (e.touches) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    }
    function start(e: TouchEvent) {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }
    document.removeEventListener('mousemove', bindMouseMove);
    document.removeEventListener('touchstart', bindMouseMove);
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchstart', start);
    move(event);
    drawLine();
    animate();
  }

  document.addEventListener('mousemove', bindMouseMove);
  document.addEventListener('touchstart', bindMouseMove);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('focus', () => {
    if (!running) {
      running = true;
      animate();
    }
  });
  window.addEventListener('blur', () => {
    running = true;
  });
};
