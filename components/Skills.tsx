import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,  FaJava, FaAngular, FaPython, FaGit, FaAws, FaJira, FaConfluence, FaDocker} from 'react-icons/fa';
import { TbBrandCpp, TbBrandTypescript, TbBrandTailwind, TbBrandMongodb, TbBrandNextjs} from "react-icons/tb";
import { SiApachekafka, SiPostman, SiSpring, SiJasmine, SiJunit5, SiTeamcity} from "react-icons/si";

const Skills = () => {
return (
<section id="skills" className="py-20 bg-gray-50">

    <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <h4 className="text-md font-bold text-gray-600 text-left ml-4">Programming Languages and Version Control</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <FaJava className="text-4xl text-orange-400 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">Java</p>
                </div>
                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <FaPython className="text-4xl text-blue-800 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">Python</p>
                </div>
                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <TbBrandCpp className="text-4xl text-blue-400 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">C++</p>
                </div>
                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <FaJsSquare className="text-4xl text-yellow-400 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">JavaScript</p>
                </div>
                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <TbBrandTypescript className="text-4xl text-blue-600 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">TypeScript</p>
                </div>
                <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <FaGit className="text-4xl text-orange-400 mb-4"/>
                    <p className="font-semibold text-lg text-gray-700">Git</p>
                </div>
            </div>

            <h4 className="text-md font-bold text-gray-600 text-left ml-4">Frontend Development</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaReact className="text-4xl text-blue-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">React</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <TbBrandNextjs className="text-4xl text-gray-600 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Next.js</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaAngular className="text-4xl text-red-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Angular</p>
            </div>

            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaHtml5 className="text-4xl text-orange-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">HTML</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaCss3Alt className="text-4xl text-blue-600 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">CSS</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <TbBrandTailwind className="text-4xl text-blue-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Tailwind CSS</p>
            </div>
                </div>

            <h4 className="text-md font-bold text-gray-600 text-left ml-4">Database and Development Tools</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaDatabase className="text-4xl text-yellow-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">SQL</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <TbBrandMongodb className="text-4xl text-green-600 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">MongoDB</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiApachekafka className="text-4xl text-gray-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Kafka</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaDocker className="text-4xl text-blue-600 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Docker</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaAws className="text-4xl text-yellow-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">AWS</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiTeamcity className="text-4xl text-black-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">TeamCity</p>
            </div>
            </div>

            <h4 className="text-md font-bold text-gray-600 text-left ml-4">Testing and Project Management</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiJunit5 className="text-4xl text-red-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">JUnit</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiJasmine className="text-4xl text-purple-700 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Jasmine/Karma</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiSpring className="text-4xl text-green-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Mockito</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <SiPostman className="text-4xl text-orange-400 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Postman</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaJira className="text-4xl text-blue-600 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Jira</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <FaConfluence className="text-4xl text-blue-500 mb-4"/>
                <p className="font-semibold text-lg text-gray-700">Confluence</p>
            </div>
            </div>

        </div>
    </div>
</section>
);
};

export default Skills;
