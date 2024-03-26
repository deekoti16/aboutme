import { useState } from "react";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required.";
            valid = false;
        } else {
            newErrors.name = "";
        }

        if (formData.email.trim() === "") {
            newErrors.email = "Email is required.";
            valid = false;
        } else if (!(isValidEmail(formData.email))) {
            newErrors.email = "Invalid email format.";
            valid = false;
        } else {
            newErrors.email = "";
        }

        if (formData.message.trim() === "") {
            newErrors.message = "Message is required.";
            valid = false;
        } else {
            newErrors.message = "";
        }
        setErrors(newErrors);
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setFormdata({
            name: "",
            email: "",
            message: ""
        })
    }

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <section id="contact">
            <div className="container px-5 py-20 mx-auto">
                <div className="relative flex items-center justify-center text-center mb-5">
                    <h2 className="text-6xl md:text-9xl uppercase font-semibold mb-0 text-gray-800">Contact</h2>
                    <p className="absolute bottom-10 left-0 right-0 mb-0 text-4xl font-semibold text-white">
                        Get In Touch
                        <span className="block w-16 border-b-4 border-green-600 mx-auto"></span>
                    </p>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pb-20">
                    <div className="md:w-1/4 text-center">
                        <h2 className="text-2xl text-white mb-3">Find Me On</h2>
                        <p className="text-gray-400 mb-5">Feel free to connect with me</p>
                        <div className="flex justify-center pb-6">
                            <a
                                href="https://github.com/deekoti16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mr-3 hover:text-purple-600"
                            >
                                <AiFillGithub className="text-3xl" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/deepika-koti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mr-3 hover:text-purple-600"
                            >
                                <FaLinkedinIn className="text-3xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/depika.08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-purple-600"
                            >
                                <AiFillInstagram className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-full text-center flex flex-col">
                        <form className="mx-auto" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row md:px-2">
                                <div className="flex flex-col mb-2 md:w-1/2 md:mb-0 md:mr-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className="bg-gray-800 border-1 border-gray-900 text-white focus:outline-none focus:border-focusColor focus:shadow-custom rounded-lg py-3 px-4"
                                    />
                                    <span className="text-red-500 mt-1 text-start ml-2">{errors.name || "\u00A0"}</span>
                                </div>
                                <div className="flex flex-col mb-2 md:w-1/2 md:ml-2">
                                    <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="bg-gray-800 border-1 border-gray-900 text-white focus:outline-none focus:border-focusColor focus:shadow-custom rounded-lg py-3 px-4"
                                    />
                                    <span className="text-red-500 mt-1 text-start ml-2">{errors.email || "\u00A0"}</span>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2 md:px-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about something"
                                    className="bg-gray-800 border-1 border-gray-900 text-white focus:outline-none focus:border-focusColor focus:shadow-custom rounded-lg py-3 px-4"
                                />
                                <span className="text-red-500 mt-1 text-start ml-2">{errors.message || "\u00A0"}</span>
                            </div>
                            <div className="flex flex-row px-2">
                                <button type="submit" className="flex-1 w-full text-center py-3 rounded bg-buttonColor text-white hover:bg-hoverColor focus:outline-none my-1">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
