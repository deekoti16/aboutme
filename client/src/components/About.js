import pdf from '../../src/images/Deepika_Koti.pdf';

export default function About() {
    return (
        <section id="about" className="px-4 py-12 lg:py-20">
            <div className="relative flex items-center justify-center text-center mb-5">
                <h2 className="text-7xl md:text-9xl uppercase font-semibold mb-0 text-gray-800">About Me</h2>
                <p className="absolute bottom-10 left-0 right-0 mb-0 text-4xl font-semibold text-white">
                    Know Me More
                    <span className="block w-16 border-b-4 border-green-600 mx-auto"></span>
                </p>
            </div>
            <div className="container relative mx-auto flex flex-col items-center justify-center lg:flex-row">
                <div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-12 text-center lg:text-left">
                    <p className="mb-8 text-sm md:text-lg leading-relaxed">
                        I specialize in designing and developing scalable web applications, guiding projects from conceptualization to deployment. My expertise spans both front-end and back-end technologies, allowing me to craft intuitive user interfaces with HTML5, CSS3, and JavaScript frameworks like React.js. On the server side, I build robust components and APIs using Node.js, Express, and other back-end frameworks.
                    </p>
                    <p className="mb-8 text-sm lg:text-xl leading-relaxed">
                        My passion lies in creating modern web applications and websites that prioritize user experience. I enjoy exploring UI/UX design principles to ensure seamless interactions and engaging interfaces. Frameworks like React.js and Tailwind CSS are my go-to tools for bringing innovative ideas to life.
                    </p>
                </div>
                <div className="lg:w-1/4 lg:pl-12">
                    <ul className="mb-10 list-inside text-white">
                        <li className="mb-4 pb-4 border-b border-gray-500"><span className="font-semibold">Name:</span> Deepika Koti</li>
                        <li className="mb-4 pb-4 border-b border-gray-500"><span className="font-semibold">Email:</span> <a href="mailto:deepikadasineni16@gmail.com" className="text-blue-400">deepikakoti16@gmail.com</a></li>
                        <li className="mb-4 pb-4 border-b border-gray-500"><span className="font-semibold">Age:</span> 28</li>
                        <li className="mb-4 pb-4 border-b border-gray-500"><span className="font-semibold">From:</span> Toronto, Canada</li>
                    </ul>
                    <div className="flex justify-center lg:justify-start">
                        <a href={pdf} download className="inline-flex text-white bg-gradient-to-br from-buttonColor to-custom-green-dark hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
