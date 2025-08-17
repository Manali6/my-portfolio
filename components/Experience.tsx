import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaAngular, FaPython, FaGit, FaAws, FaJira, FaConfluence, FaDocker, FaUnity } from 'react-icons/fa';
import { TbBrandCpp, TbBrandTypescript, TbBrandTailwind, TbBrandMongodb, TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";
import { SiApachekafka, SiPostman, SiSpring, SiJasmine, SiJunit5, SiTeamcity } from "react-icons/si";

const Experience = () => {
  const experienceData = [
    {
      company: "Changing The Present",
      role: "Software Engineer",
      duration: " August 2024 - June 2025",
      description: [
        "Developed and optimized a volunteer matching platform, improving page load performance by 30% and ensuring accessibility compliance.",
        "Collaborated with UX teams to deliver responsive layouts, creating a more inclusive and user-centric interface prepared for rollout."
      ],
    },

    {
      company: "University of Colorado Boulder",
      role: "Course Facilitator - Software Architecture for Big Data",
      duration: " August 2023 - May 2024",
      description: [
        "Facilitated a course for over 150 students, managing various responsibilities such as organizing course materials, grading assignments, and providing individual support through online office hours."
      ],
    },

    {
      company: "Citi",
      role: "Software Engineer",
      duration: "August 2019 - June 2022",
      description: [
        "Developed post-trade applications for invoice reconciliation and brokerage fee management, reducing operational errors by 40% and improving financial accuracy.",
        "Migrated over 70% of the legacy application to Angular and built a Python-based reporting utility, enhancing UI responsiveness and automating report generation to cut manual effort by 80%.",
        "Resolved 100% of critical BlackDuck security vulnerabilities across modules, strengthening compliance and system security."
      ],
      techStack: [
        {
          name: "Java", icon:
            <FaJava size={30} />, style: "text-orange-400"
        },
        {
          name: "Python", icon:
            <FaPython size={30} />, style: "text-gray-700"
        },
        {
          name: "Angular", icon:
            <FaAngular size={30} />, style: "text-red-400"
        },
        {
          name: "SQL", icon:
            <FaDatabase size={30} />, style: "text-yellow-500"
        },
        {
          name: "JUnit", icon:
            <SiJunit5 size={30} />, style: "text-red-400"
        },
        {
          name: "Jasmine/Karma", icon:
            <SiJasmine size={30} />, style: "text-purple-700"
        },
        {
          name: "Git", icon:
            <FaGit size={30} />, style: "text-orange-400"
        },
        {
          name: "Jira", icon:
            <FaJira size={30} />, style: "text-blue-600"
        },
      ],
    },

  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`bg-white p-7 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${index === experienceData.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2 text-center">{exp.company}</h3>
              <p className="text-xl text-gray-700 mb-2 text-center">{exp.role}</p>
              <p className="text-gray-500 mb-4 text-center">{exp.duration}</p>

              <ul className="text-gray-600 ml-4 list-disc">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {exp.techStack &&
                <div className="flex flex-wrap justify-center gap-6 m-4">
                  {exp.techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className={`${tech.style} flex flex-col items-center`}>
                        {tech.icon}
                        <p className="font-semibold text-sm text-gray-600 mt-1">{tech.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
