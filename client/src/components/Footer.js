import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container relative mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; 2024 Deepika Koti Portfolio. All rights reserved.</p>
                </div>
                <div className="md:w-1/2 text-center md:text-right">
                    <div className="flex justify-center md:justify-end">
                        <a
                            href="https://github.com/deekoti16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white mr-3 hover:text-buttonColor hover:shadow-custom"
                        >
                            <AiFillGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/deepika-koti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white mr-3 hover:text-buttonColor hover:shadow-custom"
                        >
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/depika.08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-buttonColor hover:shadow-custom"
                        >
                            <AiFillInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
