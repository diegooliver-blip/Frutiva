"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize bubbles
    const bubbleCount = 25;
    bubblesRef.current = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: Math.random() * 6 + 2,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.y -= bubble.speedY;
        bubble.x += bubble.speedX + Math.sin(bubble.y * 0.01) * 0.2;

        // Reset if off screen
        if (bubble.y < -20) {
          bubble.y = canvas.height + 20;
          bubble.x = Math.random() * canvas.width;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 216, 109, ${bubble.opacity})`;
        ctx.fill();

        // Bubble highlight
        ctx.beginPath();
        ctx.arc(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.size * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.5})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-[5]">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[100px]"
      >
        <motion.path
          d="M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z"
          fill="#FDFBF7"
          animate={{
            d: [
              "M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z",
              "M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 L1200,120 L0,120 Z",
              "M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
