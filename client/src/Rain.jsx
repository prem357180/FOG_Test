import React, { useEffect, useRef } from 'react';
import './css/Rain.css';

const FallingSquares = () => {
  const canvasRef = useRef(null);
  const width = 33;
  const height = 22;
  const scale = 20;
  const speed = 20;
  const trailLength = 5;
  const numSquares = 10;
  const colorChangeInterval = 1000;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.setTransform(scale, 0, 0, -scale, 0, canvas.height);

    let currentColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    let squares = Array(numSquares).fill().map(() => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      trail: []
    }));

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.05;
      for (let x = 0; x <= width; x++) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const stepSquares = () => {
      squares.forEach(square => {
        square.trail.forEach((pos, i) => {
          ctx.fillStyle = currentColor.replace('rgb', 'rgba').replace(')', `,${(trailLength - i) / trailLength})`);
          ctx.fillRect(pos.x, pos.y, 1, 1);
        });
        
        ctx.fillStyle = currentColor;
        ctx.fillRect(square.x, square.y, 1, 1);
        
        square.trail.unshift({x: square.x, y: square.y});
        if (square.trail.length > trailLength) {
          square.trail.pop();
        }
        
        if (square.y === 0) {
          square.x = Math.floor(Math.random() * width);
          square.y = height;
          square.trail = [];
        } else {
          square.y--;
        }
      });
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      stepSquares();
    };

    const colorInterval = setInterval(() => {
      currentColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }, colorChangeInterval);

    const animationInterval = setInterval(loop, speed);

    return () => {
      clearInterval(colorInterval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="container">
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default FallingSquares;