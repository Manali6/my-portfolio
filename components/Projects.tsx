"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,  FaJava, FaAngular, FaPython, FaGit, FaAws, FaJira, FaConfluence, FaDocker, FaUnity} from 'react-icons/fa';
import { TbBrandCpp, TbBrandTypescript, TbBrandTailwind, TbBrandMongodb, TbBrandNextjs, TbBrandCSharp} from "react-icons/tb";
import { SiApachekafka, SiPostman, SiSpring, SiJasmine, SiJunit5, SiTeamcity} from "react-icons/si";

const Projects = () => {
const projectData = [
{
    title: "Music Historical Analysis",
    description: "Designed and developed an intuitive user interface that facilitated in-depth music historical analysis spanning over 60 years, enabling users to explore the evolution of music genres and the impact of various features on song popularity.",
    youtubeLink: "j_qiVUbDAOM",
    techStack: [
        { name: "React", icon:
        <FaReact size={30}/>, style: "text-blue-500" },
        { name: "HTML", icon:
        <FaHtml5 size={30}/>, style: "text-orange-500" },
        { name: "CSS", icon:
        <FaCss3Alt size={30}/>, style: "text-blue-600" },
        { name: "Python", icon:
        <FaPython size={30}/>, style: "text-gray-700" },
        { name: "MongoDB", icon:
        <TbBrandMongodb size={30}/>, style: "text-green-600" },
        { name: "Docker", icon:
        <FaDocker size={30}/>, style: "text-blue-600" },
        { name: "Git", icon:
        <FaGit size={30}/>, style: "text-orange-400" },
    ],
    },
    {
    title: "Fitness Tracker",
    description: "Developed a fitness tracker application with a user-friendly interface for goal tracking, workout and dynamic progress charts and integrated an external AI-powered tool for personalized nutrition recommendations.",
    youtubeLink: "ZwNteUswkT0",
    techStack: [
        { name: "React", icon:
        <FaReact size={30}/>, style: "text-blue-500" },
        { name: "HTML", icon:
        <FaHtml5 size={30}/>, style: "text-orange-500" },
        { name: "CSS", icon:
        <FaCss3Alt size={30}/>, style: "text-blue-600" },
        { name: "Python", icon:
        <FaPython size={30}/>, style: "text-gray-700" },
        { name: "MongoDB", icon:
        <TbBrandMongodb size={30}/>, style: "text-green-600" },
        { name: "Kafka", icon:
        <SiApachekafka size={30}/>, style: "text-gray-500" },
        { name: "Git", icon:
        <FaGit size={30}/>, style: "text-orange-400" },
    ],
    },
    {
    title: "On-Premise Encryption Key Management Integration with AWS, S3",
    description: "Collaborated with IBM to develop a middleware that integrates IBM’s key management server with AWS using REST APIs to provide interoperability between them, enabling the organization restrictive and authentic access to data.",
    youtubeLink: "_rmlOdjbSKg",
    techStack: [
        { name: "Java", icon:
        <FaJava size={30}/>, style: "text-orange-400" },
        { name: "Angular", icon:
        <FaAngular size={30}/>, style: "text-red-400" },
        { name: "HTML", icon:
        <FaHtml5 size={30}/>, style: "text-orange-500" },
        { name: "CSS", icon:
        <FaCss3Alt size={30}/>, style: "text-blue-600" },
        { name: "AWS", icon:
        <FaAws size={30}/>, style: "text-yellow-400" },
        { name: "SQL", icon:
        <FaDatabase size={30}/>, style: "text-yellow-500" },
        { name: "Jasmine/Karma", icon:
        <SiJasmine size={30}/>, style: "text-purple-700" },
        { name: "Mockito", icon:
        <SiSpring size={30}/>, style: "text-green-500" },
        { name: "Postman", icon:
        <SiPostman size={30}/>, style: "text-orange-400" },
    ],
    },
    {
    title: "Transcatheter Mitral Valve Placement Training Simulator",
    description: "Engineered and implemented an interactive simulation module in collaboration with Medtronic, replicating the process of transcatheter mitral valve placement to provide interventional cardiologists with a risk-free environment to refine their skills.",
    youtubeLink: "qA28xOPP67s",
    techStack: [
        { name: "Unity", icon:
        <FaUnity size={30}/>, style: "text-gray-700" },
        { name: "C#", icon:
        <TbBrandCSharp size={30}/>, style: "text-blue-700" },
        { name: "Jira", icon:
        <FaJira size={30}/>, style: "text-blue-600" },
        { name: "Git", icon:
        <FaGit size={30}/>, style: "text-orange-400" },
    ],
    },
];

const [currentIndex, setCurrentIndex] = useState(0);

const goToNextProject = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
};

const goToPrevProject = () => {
setCurrentIndex(
(prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length
);
};

const currentProject = projectData[currentIndex];

return (
<section id="projects" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">{currentProject.title}</h3>
                <p className="text-gray-800 mb-4 max-w-4xl text-center mx-auto">{currentProject.description}</p>

                <div className="flex flex-wrap justify-center gap-6 m-6">
                    {currentProject.techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className={`${tech.style} flex flex-col items-center`}>
                            {tech.icon}
                            <p className="font-semibold text-gray-600 mt-1">{tech.name}</p>
                        </div>
                    </div>
                    ))}
                </div>


                <div className="relative pt-[35%] mx-30 ">
                    <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${currentProject.youtubeLink}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    ></iframe>
                </div>

            </div>



            <button
                    onClick={goToPrevProject}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
            >
                <FaArrowLeft size={20} />
            </button>

            <button
                    onClick={goToNextProject}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
            >
                <FaArrowRight size={20} />
            </button>



        </div>
    </div>
</section>
);
};

export default Projects;
