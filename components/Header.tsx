import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-blue-600 py-4 px-6 bg-gray-900 text-white">
      <a href="/" className="logo text-xl font-bold flex items-center">
        <i className="fab fa-node-js"></i> Manali Kale
      </a>
      <nav className="navbar">
        <ul className="flex space-x-6">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}
