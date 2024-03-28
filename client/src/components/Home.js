import homegif from '../../src/images/home-img.svg';
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <section id="home" className="px-4 py-12 lg:py-20">
            <div className="container relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 lg:pr-12 lg:order-2 mb-10  lg:mb-0">
                    <img
                        className="mx-auto lg:mx-0 sm:mt-10 object-cover object-center rounded-lg h-64 lg:h-80 xl:h-96"
                        alt="hero"
                        src={homegif}
                    />
                </div>
                <div className="lg:w-1/2 lg:pl-12 lg:order-1 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white mb-4">
                        Hi, I'm Deepika Koti.
                        <div className="text-customRed">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Full-stack Developer",
                                        "Frontend Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </h1>
                    <p className="mb-6 text-md leading-relaxed">
                        I'm equipped to handle both frontend and backend tasks, allowing me to bring complete web solutions to life. From designing intuitive interfaces to implementing robust server-side functionalities, I ensure every aspect of the application works harmoniously.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="text-white bg-gradient-to-br from-buttonColor to-custom-green-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                            Work with Me
                        </a>
                        {/* mb-4 md:mb-0 w-full md:w-auto text-white bg-buttonColor border-0 py-2 px-8 focus:outline-none hover:bg-hoverColor rounded-lg text-lg */}
                        <a
                            href="#projects"
                            className="w-full md:w-auto ml-0 md:ml-4 text-gray-400 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-bl rounded-lg text-lg">
                            {/* text-white bg-gradient-to-br from-custom-gray to-custom-gray-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2 */}
                            {/* w-full md:w-auto ml-0 md:ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-lg text-lg */}
                            See my past work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
