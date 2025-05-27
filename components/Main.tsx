"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

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

useEffect(() => {
const handleMouseMove = (e: MouseEvent) => {
setMousePosition({ x: e.clientX, y: e.clientY });
};

window.addEventListener("mousemove", handleMouseMove);
return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

return (
<section id="home"
         className="relative w-full h-screen flex items-center justify-center  overflow-hidden">
    <section
            className="relative w-full h-screen flex flex-row items-center justify-between  overflow-hidden px-6"
    >
        {/* Text on the left */}
        <div className="flex flex-col justify-center items-start text-left w-1/2">
            <h1 className="text-purple-600 text-6xl md:text-7xl font-extrabold ml-20 mb-10 z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]">
                Hi, I am Manali
            </h1>
            <h2 className="text-indigo-600 text-2xl md:text-3xl mt-4 font-semibold ml-20 z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]">
                <Typewriter
                        words={[
                "Full Stack Developer",
                "Tech Enthusiast",
                "Creative Problem Solver",
                "Passionate Coder",
                "Turning Ideas into Interfaces",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                />
            </h2>
        </div>

        {/* Image on the right */}
        <div className="w-1/2 flex justify-center">
            <Image
                    src="/image1.png"
                    alt="Image of Manali"
                    width={600}
                    height={600}
                    className="rounded-full border-4 border-white shadow-lg mt-10 mb-10 z-10"
            />
        </div>
    </section>


    {bubbles.map((bubble) => {
    const dx = mousePosition.x - bubble.x;
    const dy = mousePosition.y - bubble.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let moveX = 0;
    let moveY = 0;

    if (distance < 150) {
    moveX = (dx / distance) * 80;
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
            backgroundImage: "radial-gradient(circle, rgba(126,34,206,0.1) 0%, rgba(168,85,247,0.05) 100%)",



    }}

    animate={{
    x: moveX,
    y: moveY,
    }}
    transition={{
    duration: 0.5,
    ease: "easeOut",
    }}
    />
    );
    })}
</section>
);
};

export default Main;