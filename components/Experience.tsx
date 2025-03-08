const Experience = () => {
  const experienceData = [
    {
      company: "Changing The Present",
      role: "Software Engineer Intern",
      duration: " August 2024 - Present",
      description: "Developed and maintained trading applications used by thousands of traders across financial products. Led initiatives to enhance transaction reconciliation and reporting tools.",
      techStack: "Python, React, SQL, JavaScript"
    },
    {
       company: "University of Colorado Boulder",
       role: "Course Facilitator",
       duration: "August 2023 - May 2024",
       description: "Worked on enhancing search algorithms and improving internal tools used for data analysis. Collaborated with teams to optimize product features and increase user engagement.",
       techStack: "Java, Python, Google Cloud"
    },
    {
      company: "Citi",
      role: "Software Engineer",
      duration: "August 2019 - June 2022",
      description: "Worked on enhancing search algorithms and improving internal tools used for data analysis. Collaborated with teams to optimize product features and increase user engagement.",
      techStack: "Java, Python, Google Cloud"
    },
    {
      company: "Citi",
      role: "Software Engineer Intern",
      duration: "2019 - 2020",
      description: "Designed and developed interactive UIs for web applications, ensuring optimal user experience. Collaborated with the design team to implement modern UI/UX practices.",
      techStack: "React, Tailwind CSS, JavaScript"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Work Experience</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.company}</h3>
              <p className="text-xl text-gray-700 mb-2">{exp.role}</p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <p className="text-gray-600 mb-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
