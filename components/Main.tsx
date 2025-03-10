"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}


const Main = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 25 }).map(() => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 80 + 30,
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
    window.addEventListener("resize", generateBubbles);
    return () => window.removeEventListener("resize", generateBubbles);
  }, []);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600 overflow-hidden">
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600 overflow-hidden text-center">
        <h1 className="text-white text-5xl font-bold relative z-10">
          Hi, I am Manali Kale
        </h1>
        <p className="text-white text-2xl mt-4 relative z-10">
          Turning ideas into interactive web experiences as a Full Stack Developer.
        </p>
      </section>

      {/* Floating Transparent Bubbles */}
      {bubbles.map((bubble) => {
        const dx = mousePosition.x - bubble.x;
        const dy = mousePosition.y - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let moveX = 0;
        let moveY = 0;

        // Push the bubbles away when mouse is near
        if (distance < 150) {
          moveX = (dx / distance) * 80; // Moves 80px away
          moveY = (dy / distance) * 80;
        }

        return (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full backdrop-blur-lg shadow-lg"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
              top: bubble.y,
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent bubble
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              x: moveX,
              y: moveY,
            }}
            transition={{
              duration: 0.5, // Fast response
              ease: "easeOut",
            }}
          />
        );
      })}
    </section>
  );
};

export default Main;
