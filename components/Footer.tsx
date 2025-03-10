import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon

        const Footer = () => {
        return (
<footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-6">
    <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 ">
            <a
                    href="https://www.linkedin.com/in/manali-kale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 text-xl flex items-center"
            >
                <FaLinkedin size={30} className="mr-2" /> {/* LinkedIn Icon */}
                LinkedIn
            </a>
        </div>
        <p className="mt-2 text-sm">
            Built with ❤️ by Manali Kale
        </p>
    </div>
</footer>
        );
        };

        export default Footer;
