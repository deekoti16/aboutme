import React from "react";

// Example data for experience and education
const experienceData = [
    {
        id: 1,
        title: "UI/UX Designer",
        company: "Capgemini",
        date: "May 2022 - Jan 2024",
        description:
            "As a UI/UX Designer, I specialize in creating delightful digital experiences through user-centered design principles. Leveraging tools like Figma and Adobe XD, I collaborate closely with cross-functional teams to craft intuitive interfaces that meet both user needs and business goals. From wireframing to user testing, I am dedicated to delivering seamless experiences that drive engagement and satisfaction.",
    },
    {
        id: 2,
        title: "Full-stack Developer",
        company: "Capgemini",
        date: "Sep 2020 - Apr 2022",
        description:
            "As a full-stack developer, I spearheaded the development of a dynamic web application using React for the frontend and Node.js, Express, and MongoDB for the backend. My responsibilities included architecting robust database structures, implementing efficient server-side logic, and crafting intuitive user interfaces. I contributed to every aspect of the development lifecycle, ensuring seamless integration between frontend and backend components for optimal performance and user experience.",
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "Capgemini",
        date: "Feb 2018 - Apr 2022",
        description:
            "As a frontend developer specializing in React.js, I've been instrumental in building captivating user interfaces and interactive web applications. Leveraging my expertise in React.js and Tailwind CSS, I've crafted seamless user experiences and contributed to the development of dynamic and responsive websites.",
    },
];

const educationData = [
    {
        id: 1,
        institution: "Conestoga College",
        degree: "Post Graduation in Web Developement",
        date: "2022 - 2023",
    },
    {
        id: 2,
        institution: "Shri Vishnu Engineering College",
        degree: "Bachelor's Degree in Information technology",
        date: "2013 - 2017",
    },
];

const Resume = () => {
    return (
        <section id="resume" className="container mx-auto px-4 py-12 lg:py-20">
            <div className="relative m-2 flex items-center justify-center text-center mb-5">
                <h2 className="text-6xl md:text-9xl uppercase font-semibold mb-0 text-gray-800">Summary</h2>
                <p className="absolute bottom-10 left-0 right-0 mb-0 text-4xl font-semibold text-white">
                    Resume
                    <span className="block w-16 border-b-4 border-green-600 mx-auto"></span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Experience Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Experience</h2>
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="mb-6 relative">
                            <div className="mb-2 flex items-center">
                                <div className="w-4 h-4 bg-gray-800 rounded-full mr-2"></div>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-row flex-col">
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        <h3 className="md:ml-40 text-sm font-normal py-1 text-white font-semibold bg-hoverColor border-1 border-gray-900 px-2 rounded">{exp.date}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500">{exp.company}</p>
                                </div>
                            </div>
                            <div className="ml-6 pl-2">
                                <p className="text-sm">{exp.description}</p>
                            </div>
                            {/* Connection line */}
                            {exp.id !== experienceData.length && (
                                <div className="absolute left-1.5 top-14 md:top-9 w-0.5 h-full bg-green-600"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {educationData.map((edu) => (
                        <div key={edu.id} className="mb-6 relative">
                            <div className="mb-2 flex items-center">
                                <div className="w-4 h-4 bg-gray-800 rounded-full mr-2"></div>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-row flex-col">
                                        <h3 className="text-lg text-wrap font-semibold">{edu.degree}</h3>
                                        <h3 className="md:ml-10 text-sm font-normal py-1 text-white font-semibold bg-hoverColor border-1 border-gray-900 px-2 rounded">{edu.date}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500">{edu.institution}</p>
                                </div>
                            </div>
                            {/* Connection line */}
                            {edu.id !== educationData.length && (
                                <div className="absolute left-1.5 top-16 md:top-9 w-0.5 h-full bg-green-600"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;
