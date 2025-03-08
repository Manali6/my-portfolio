const Education = () => {
  const educationData = [
   {
         institution: "University of Colorado Boulder",
         degree: "Master of Science",
         major: "Computer Science",
         duration: "2022 - 2024",
       },
    {
      institution: "Cummins College of Engineering",
      degree: "Bachelor of Engineering in Computer Engineering",
      duration: "2016 - 2019",
      description: "Focused on software engineering, algorithms, data structures, and artificial intelligence."
    },

     {
            institution: "Government Polytechnic, Pune",
            degree: "Diploma in Computer Engineering",
            duration: "2013 - 2016",
            description: "Focused on software engineering, algorithms, data structures, and artificial intelligence."
         },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.institution}</h3>
              <p className="text-xl text-gray-500 mb-2">{edu.degree}</p>
              <p className="text-xl text-gray-700 mb-2">{edu.major}</p>
              <p className="text-gray-500 mb-4">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
