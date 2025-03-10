import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,  FaJava, FaAngular, FaPython, FaGit, FaAws, FaJira, FaConfluence, FaDocker, FaUnity} from 'react-icons/fa';
import { TbBrandCpp, TbBrandTypescript, TbBrandTailwind, TbBrandMongodb, TbBrandNextjs, TbBrandCSharp} from "react-icons/tb";
import { SiApachekafka, SiPostman, SiSpring, SiJasmine, SiJunit5, SiTeamcity} from "react-icons/si";

const Experience = () => {
const experienceData = [
{
  company: "Changing The Present",
  role: "Software Engineer Intern",
  duration: " August 2024 - Present",
  description: [
  "Currently, working on a software development project aimed at supporting charitable initiatives, leveraging my programming skills and fostering collaborative teamwork to drive impactful solutions."
  ],
},
{
  company: "University of Colorado Boulder",
  role: "Course Facilitator",
  duration: "June 2023 - May 2024",
  description: [
  "Facilitated a course for over 150 students, managing various responsibilities such as organizing course materials, grading assignments, and providing individual support through online office hours, while fostering an engaging and collaborative learning environment."
  ],
},
{
  company: "Citi",
  role: "Software Engineer",
  duration: "August 2019 - June 2022",
  description: [
  "Collaborated with an agile team to enhance software components, improving the efficiency and functionality of various post-trading activities.",
  "Successfully migrated over 70% of the web application from GWT to Angular within a year, resulting in improved access to post-trading activities."
  ],
  techStack: [
  { name: "Java", icon:
  <FaJava size={30}/>, style: "text-orange-400" },
  { name: "Python", icon:
  <FaPython size={30}/>, style: "text-gray-700" },
  { name: "Angular", icon:
  <FaAngular size={30}/>, style: "text-red-400" },
  { name: "SQL", icon:
  <FaDatabase size={30}/>, style: "text-yellow-500" },
  { name: "JUnit", icon:
  <SiJunit5 size={30}/>, style: "text-red-400" },
  { name: "Jasmine/Karma", icon:
  <SiJasmine size={30}/>, style: "text-purple-700" },
  { name: "Git", icon:
  <FaGit size={30}/>, style: "text-orange-400" },
  { name: "Jira", icon:
  <FaJira size={30}/>, style: "text-blue-600" },
  ],
},
{
company: "Citi",
  role: "Software Engineer Intern",
  duration: "May 2018 - June 2018",
  description: [
  "Developed a tool using Spring Boot microservices to simplify basic operations on the kdb database, addressing the complexity of queries in q language.",
  "Streamlined database operations, significantly enhancing user accessibility."
  ],
  techStack: [
  { name: "Java", icon:
  <FaJava size={30}/>, style: "text-orange-400" },
  { name: "Angular", icon:
  <FaAngular size={30}/>, style: "text-red-400" },
  { name: "HTML", icon:
  <FaHtml5 size={30}/>, style: "text-orange-500" },
  { name: "CSS", icon:
  <FaCss3Alt size={30}/>, style: "text-blue-600" },
  { name: "SQL", icon:
  <FaDatabase size={30}/>, style: "text-yellow-500" },
  { name: "Mockito", icon:
  <SiSpring size={30}/>, style: "text-green-500" },
  { name: "Postman", icon:
  <SiPostman size={30}/>, style: "text-orange-400" },
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
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
