// import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from '../data';

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

export default function Skills() {
    //const shuffledSkills = shuffleArray([...skills]);
    return (
        <section id="skills">
            <div className="container relative px-5 py-20 mx-auto">
                {/* <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here's a glimpse of my technical expertise and the technologies I work with:
                    </p>
                </div> */}
                <div className="relative m-2 flex items-center justify-center text-center mb-5">
                    <h2 className="text-7xl md:text-9xl uppercase font-semibold mb-0 text-gray-800">Skills</h2>
                    <p className="absolute bottom-10 left-0 right-0 mb-0 text-4xl font-semibold text-white">
                        Discover My Abilities
                        <span className="block w-16 border-b-4 border-green-600 mx-auto"></span>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    {skills.map((skill) => (
                        <div key={skill} className="m-2 px-3 py-2 rounded-full bg-gray-800 border border-green-400 hover:border-green-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                            <span className="text-white">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
