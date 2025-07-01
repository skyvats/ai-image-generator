import React, { useEffect, useState } from "react";

const AboutProject: React.FC = () => {
    const [experienceDuration, setExperienceDuration] = useState("");

    useEffect(() => {
        const startDate = new Date("2021-10-01T00:00:00Z");

        const updateDuration = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const seconds = Math.floor(diff / 1000);
            const years = Math.floor(seconds / (3600 * 24 * 365));
            const days = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 24));
            const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;

            setExperienceDuration(
                `${years}y ${days}d ${hrs}h ${mins}m ${secs}s`
            );
        };

        updateDuration();
        const interval = setInterval(updateDuration, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-8 font-sans text-gray-900 bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-gray-100 min-h-screen">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-indigo-900 tracking-tight mb-8 pb-4 border-b-2 border-indigo-200 transition-all duration-300">
                About This Project
            </h1>

            {/* Project Description */}
            <section className="grid gap-6 mb-12">
                <h2 className="text-3xl font-bold text-indigo-800 animate-fade-in">AI Text-to-Image Generator</h2>
                <p className="leading-relaxed text-gray-700 text-lg max-w-3xl">
                    This project showcases my expertise as a React developer through a Text-to-Image Generator powered by the Vyro AI API. Users can input prompts to generate stunning AI-crafted images in styles like anime, cinematic, and digital art.
                </p>
                <p className="leading-relaxed text-gray-700 text-lg max-w-3xl">
                    Built with <strong className="text-indigo-600">React + TypeScript</strong> and styled with <strong className="text-indigo-600">Tailwind CSS</strong>, it features full-screen image viewing, seamless downloads, and fluid transitions. This portfolio project is designed to highlight my frontend and full-stack skills, aiming to attract exciting career opportunities.
                </p>
            </section>

            {/* Resume Card */}
            <section className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-10 transition-all duration-300 hover:shadow-indigo-200 hover:-translate-y-1">
                <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-l-4 pl-4 border-indigo-600 flex items-center">
                    <span className="mr-2">📄</span> Resume
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Summary */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Summary</h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                            Results-driven Software Engineer with expertise in React, TypeScript, and Java. Passionate about enhancing user experiences and tackling technical challenges. Proficient in Spring Boot and SQL for robust backend solutions. Holds a Master’s in Computer Application with outstanding academic performance.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Skills</h3>
                        <ul className="space-y-2 text-gray-700 text-base">
                            <li><strong className="text-indigo-600">Languages:</strong> React, Redux, TypeScript, JavaScript, Java, SQL</li>
                            <li><strong className="text-indigo-600">Frontend:</strong> HTML/CSS, JQuery, Bootstrap, PrimeReact, Plotly</li>
                            <li><strong className="text-indigo-600">Backend:</strong> Spring Boot, REST API</li>
                            <li><strong className="text-indigo-600">Tools:</strong> Photoshop, Blender, Microsoft Office, Vis.js</li>
                            <li><strong className="text-indigo-600">Certifications:</strong> NIIT - Programming in Java</li>
                        </ul>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Professional Experience</h3>
                        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100">
                            <p className="font-bold text-indigo-800 text-lg">NMSWorks Software, Chennai</p>
                            <p className="italic text-sm text-gray-600">Software Engineer — Oct 2021 to Present</p>
                            <p className="mt-3">
                                <strong className="text-green-700">Live Experience:</strong>{" "}
                                <span className="bg-green-100 px-3 py-1 rounded-full font-mono text-green-800 text-sm">{experienceDuration}</span>
                            </p>
                            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-2">
                                <li>Developed and enhanced features using React & TypeScript</li>
                                <li>Resolved bugs and optimized user experience</li>
                                <li>Built and maintained APIs with Spring Boot and SQL</li>
                                <li>Contributed to network analytics web services</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Education</h3>
                        <p className="font-bold text-gray-800 text-lg">Master of Computer Application</p>
                        <p className="text-gray-700">College of Engineering Guindy, ANNA University, Tamil Nadu</p>
                        <p className="italic text-sm text-gray-600">2021 | 8.71 CGPA</p>
                    </div>

                    {/* Projects */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Academic Projects</h3>
                        <div className="grid gap-4">
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <strong className="text-indigo-600 text-lg">VR Medical Museum</strong>
                                <p className="text-gray-700 text-sm mt-1">Virtual human organ demo in 3D with Watson Guide</p>
                                <a href="https://github.com/skyvats/VR_MedicalMuseum.git" target="_blank" className="text-indigo-600 underline hover:text-indigo-800 transition-colors text-sm">GitHub Link</a>
                            </div>
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <strong className="text-indigo-600 text-lg">Message Status</strong>
                                <p className="text-gray-700 text-sm mt-1">Android SMS app with delivery confirmation</p>
                                <a href="https://github.com/skyvats/Message.git" target="_blank" className="text-indigo-600 underline hover:text-indigo-800 transition-colors text-sm">GitHub Link</a>
                            </div>
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <strong className="text-indigo-600 text-lg">Pharmacy Management System</strong>
                                <p className="text-gray-700 text-sm mt-1">Desktop app to manage pharmacy inventory</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements and Roles */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Achievements & Roles</h3>
                        <div className="grid gap-4">
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <p className="text-gray-700 text-base">Runner Up - TIP 2021 for Top Final Year Project (CEG, Chennai)</p>
                            </div>
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <p className="text-gray-700 text-base">Editorial Team Member at CEG (2019–2021), created 225-year brochure</p>
                            </div>
                            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                                <p className="text-gray-700 text-base">Graphic Designer at National Hub for Healthcare Development</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-indigo-700">Contact</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>Email: <a href="mailto:akashranjan0212@gmail.com" className="text-indigo-600 underline hover:text-indigo-800 transition-colors">akashranjan0212@gmail.com</a></li>
                            <li>Phone: 7352770747</li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/akash-ranjan-67453bb1/" className="text-indigo-600 underline hover:text-indigo-800 transition-colors" target="_blank">linkedin.com/in/akash-ranjan</a></li>
                            <li>GitHub: <a href="https://github.com/skyvats" className="text-indigo-600 underline hover:text-indigo-800 transition-colors" target="_blank">github.com/skyvats</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutProject;