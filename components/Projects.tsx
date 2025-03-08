import { FaReact, FaNodeJs, FaPython, FaAngular, FaGithub, FaJsSquare } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "CookGenie",
      description: "An app that generates recipes based on ingredients you have, using AI to suggest creative dishes.",
      youtubeLink: "qA28xOPP67s",
      techStack: [
              { name: "D3.js", icon: <FaGithub size={30} /> , style:"text-red-700"}, // D3.js icon can be custom or use GitHub logo
              { name: "React", icon: <FaReact size={30} /> , style:"text-blue-700"},
              { name: "Node.js", icon: <FaNodeJs size={30} /> , style:"text-blue-700"},
            ],
    },
    {
      title: "Music Evolution",
      description: "An interactive tool that visualizes the evolution of music genres over 60 years, based on song data and trends.",
      youtubeLink: "j_qiVUbDAOM",
      techStack: [
                    { name: "D3.js", icon: <FaGithub size={30} /> , style:"text-blue-700"}, // D3.js icon can be custom or use GitHub logo
                    { name: "React", icon: <FaReact size={30} />, style:"text-blue-700" },
                    { name: "Node.js", icon: <FaNodeJs size={30} /> , style:"text-blue-700"},
                  ],
    },
    {
      title: "Trader App",
      description: "A trading application for Citi used by thousands of traders to reconcile transactions and track market trends.",
      youtubeLink: "ZwNteUswkT0",
      techStack: [
                    { name: "D3.js", icon: <FaGithub size={30} /> , style:"text-blue-700"}, // D3.js icon can be custom or use GitHub logo
                    { name: "React", icon: <FaReact size={30} /> , style:"text-blue-700"},
                    { name: "Node.js", icon: <FaNodeJs size={30} /> , style:"text-green-700"},
                  ],
    },
    {
          title: "Trader App",
          description: "A trading application for Citi used by thousands of traders to reconcile transactions and track market trends.",
          youtubeLink: "_rmlOdjbSKg",
          techStack: [
                        { name: "D3.js", icon: <FaGithub size={30} /> , style:"text-blue-700"}, // D3.js icon can be custom or use GitHub logo
                        { name: "React", icon: <FaReact size={30} /> , style:"text-blue-700"},
                        { name: "Node.js", icon: <FaNodeJs size={30} />, style:"text-blue-700" },
                      ],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>


              <div className="flex flex-wrap justify-center gap-4 mt-4">

                              {project.techStack.map((tech, index) => (
                                <div key={index} className={tech.style}>
                                  {tech.icon}
                                  <p className="text-gray-700">{tech.name}</p>
                                </div>
                              ))}
              </div>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${project.youtubeLink}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
