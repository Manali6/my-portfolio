import { FaBuilding } from "react-icons/fa";

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
        degree: "Bachelor of Engineering",
        major: "Computer Engineering",
        duration: "2016 - 2019",
    },
    {
        institution: "Government Polytechnic, Pune",
        degree: "Diploma",
        major: "Computer Engineering",
        duration: "2013 - 2016",
    },
];

    return (
    <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Education</h2>
            <div className="relative">
                {/* Vertical Timeline */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="border-l-2 border-gray-300 h-full"></div>
                </div>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                    <div
                            key={index}
                            className={`relative flex justify-between items-center ${
                            index % 2=== 0 ?
                    "flex-row" : "flex-row-reverse"
                    }`}
                    >
                    {/* Timeline Circle */}
                    <FaBuilding className="w-6 h-6 absolute left-[605] text-blue-800"/>

                    {/* Card Content */}
                    <div className={`w-full max-w-md p-6 bg-white shadow-lg rounded-lg ${
                         index % 2=== 0 ?
                    "ml-16 text-left" : "mr-16 text-right"
                    }`}>
                    <h3 className="text-2xl font-semibold text-blue-800 text-center">{edu.institution}</h3>
                    <p className="text-xl text-gray-500 text-center">{edu.degree}</p>
                    <p className="text-xl text-gray-700 text-center">{edu.major}</p>
                    <p className="text-gray-500 text-center">{edu.duration}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>
    </section>
    );
};

export default Education;
