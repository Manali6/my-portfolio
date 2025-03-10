"use client";
import Link from "react-scroll/modules/components/Link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center  bg-gradient-to-r from-purple-500 to-blue-600 py-4 px-6 bg-gray-900 text-white z-50">
      <a href="/" className="text-xl font-bold flex items-center">
        Manali Kale
      </a>

      <nav>
        <ul className="flex space-x-6">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
          <li><Link to="education" smooth={true} duration={500} className="cursor-pointer">Education</Link></li>
          <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}
