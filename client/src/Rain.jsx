import React, { useEffect, useRef } from 'react';
import './css/Rain.css';

const FallingSquares = () => {
  const canvasRef = useRef(null);
  const width = 20;
  const height = 15;
  const scale = 20;
  const speed = 50;
  const trailLength = 6;
  const numSquares = 5;
  const colorTransitionSpeed = 0.1; // Speed of color transition

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.setTransform(scale, 0, 0, -scale, 0, canvas.height);

    let currentColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    let targetColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];

    const interpolateColor = (current, target, speed) =>
      current.map((c, i) => c + (target[i] - c) * speed);

    let squares = Array(numSquares).fill().map(() => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      trail: [],
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
          const trailOpacity = (trailLength - i) / trailLength;
          ctx.fillStyle = `rgba(${currentColor.map(c => Math.round(c)).join(',')}, ${trailOpacity})`;
          ctx.fillRect(pos.x, pos.y, 1, 1);
        });

        ctx.fillStyle = `rgb(${currentColor.map(c => Math.round(c)).join(',')})`;
        ctx.fillRect(square.x, square.y, 1, 1);

        square.trail.unshift({ x: square.x, y: square.y });
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
      currentColor = interpolateColor(currentColor, targetColor, colorTransitionSpeed);
      if (
        currentColor.every((c, i) => Math.abs(c - targetColor[i]) < 1)
      ) {
        targetColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
      }
    };

    const animationInterval = setInterval(loop, speed);

    return () => {
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
