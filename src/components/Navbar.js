import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10 border-b-2 border-green-800">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-1 md:mb-0">
                    <a href="#home" className="ml-3 text-xl">
                        Koti.
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-white">
                        About
                    </a>

                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#resume" className="mr-5 hover:text-white">
                        Resume
                    </a>
                    {/* <Link to="/resume" className="mr-5 hover:text-white">
                        Resume
                    </Link> */}
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-1 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
