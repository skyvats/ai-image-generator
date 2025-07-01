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

            setExperienceDuration(`${years}y ${days}d ${hrs}h ${mins}m ${secs}s`);
        };

        updateDuration();
        const interval = setInterval(updateDuration, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-8 font-sans text-[color:var(--foreground)] bg-[color:var(--background-soft)] rounded-3xl shadow-2xl border border-[color:var(--border)] min-h-screen transition-colors duration-500">
            <h1 className="text-5xl font-extrabold tracking-tight mb-8 pb-4 border-b-2 border-[color:var(--border)]">
                About This Project
            </h1>

            {/* Project Overview */}
            <section className="grid gap-6 mb-12">
                <h2 className="text-3xl font-bold text-[color:var(--primary)] animate-fade-in">AI Text-to-Image Generator</h2>
                <p className="leading-relaxed text-lg max-w-3xl text-[color:var(--foreground)]/90">
                    This project showcases my expertise as a React developer through a Text-to-Image Generator powered by the Vyro AI API. Users can input prompts to generate stunning AI-crafted images in styles like anime, cinematic, and digital art.
                </p>
                <p className="leading-relaxed text-lg max-w-3xl text-[color:var(--foreground)]/90">
                    Built with <strong className="text-[color:var(--primary)]">React + TypeScript</strong> and styled with <strong className="text-[color:var(--primary)]">Tailwind CSS</strong>, it features full-screen image viewing, seamless downloads, and fluid transitions. This portfolio project is designed to highlight my frontend and full-stack skills, aiming to attract exciting career opportunities.
                </p>
            </section>

            {/* Resume Section */}
            <section className="bg-[color:var(--background)] rounded-3xl shadow-lg border border-[color:var(--border)] p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-3xl font-bold text-[color:var(--primary)] mb-8 border-l-4 pl-4 border-[color:var(--primary)] flex items-center">
                    <span className="mr-2">📄</span> Resume
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Summary */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Summary</h3>
                        <p className="leading-relaxed text-base text-[color:var(--foreground)]/80">
                            Results-driven Software Engineer with expertise in React, TypeScript, and Java. Passionate about enhancing user experiences and tackling technical challenges. Proficient in Spring Boot and SQL for robust backend solutions. Holds a Master’s in Computer Application with outstanding academic performance.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Skills</h3>
                        <ul className="space-y-2 text-base text-[color:var(--foreground)]/80">
                            <li><strong className="text-[color:var(--primary)]">Languages:</strong> React, Redux, TypeScript, JavaScript, Java, SQL</li>
                            <li><strong className="text-[color:var(--primary)]">Frontend:</strong> HTML/CSS, JQuery, Bootstrap, PrimeReact, Plotly</li>
                            <li><strong className="text-[color:var(--primary)]">Backend:</strong> Spring Boot, REST API</li>
                            <li><strong className="text-[color:var(--primary)]">Tools:</strong> Photoshop, Blender, Microsoft Office, Vis.js</li>
                            <li><strong className="text-[color:var(--primary)]">Certifications:</strong> NIIT - Programming in Java</li>
                        </ul>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Professional Experience</h3>
                        <div className="bg-[color:var(--background-soft)] p-6 rounded-2xl border border-[color:var(--border)] hover:bg-[color:var(--background)] transition-all duration-300">
                            <p className="font-bold text-lg text-[color:var(--primary)]">NMSWorks Software, Chennai</p>
                            <p className="italic text-sm text-[color:var(--foreground)]/60">Software Engineer — Oct 2021 to Present</p>
                            <p className="mt-3">
                                <strong className="text-green-600">Live Experience:</strong>{" "}
                                <span className="bg-green-100 px-3 py-1 rounded-full font-mono text-green-700 text-sm">{experienceDuration}</span>
                            </p>
                            <ul className="list-disc list-inside mt-4 text-sm text-[color:var(--foreground)]/80 space-y-2">
                                <li>Developed and enhanced features using React & TypeScript</li>
                                <li>Resolved bugs and optimized user experience</li>
                                <li>Built and maintained APIs with Spring Boot and SQL</li>
                                <li>Contributed to network analytics web services</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Education</h3>
                        <p className="font-bold text-lg text-[color:var(--foreground)]">Master of Computer Application</p>
                        <p className="text-[color:var(--foreground)]/80">College of Engineering Guindy, ANNA University, Tamil Nadu</p>
                        <p className="italic text-sm text-[color:var(--foreground)]/60">2021 | 8.71 CGPA</p>
                    </div>

                    {/* Academic Projects */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Academic Projects</h3>
                        <div className="grid gap-4">
                            {[
                                {
                                    title: "VR Medical Museum",
                                    desc: "Virtual human organ demo in 3D with Watson Guide",
                                    link: "https://github.com/skyvats/VR_MedicalMuseum.git"
                                },
                                {
                                    title: "Message Status",
                                    desc: "Android SMS app with delivery confirmation",
                                    link: "https://github.com/skyvats/Message.git"
                                },
                                {
                                    title: "Pharmacy Management System",
                                    desc: "Desktop app to manage pharmacy inventory"
                                }
                            ].map((proj, i) => (
                                <div key={i} className="bg-[color:var(--background-soft)] p-5 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--background)] hover:shadow-lg transition-all duration-300">
                                    <strong className="text-lg text-[color:var(--primary)]">{proj.title}</strong>
                                    <p className="text-sm text-[color:var(--foreground)]/80 mt-1">{proj.desc}</p>
                                    {proj.link && (
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            className="text-sm text-[color:var(--link)] underline hover:text-[color:var(--link-hover)] transition-colors"
                                        >
                                            GitHub Link
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Achievements & Roles</h3>
                        <div className="grid gap-4">
                            {[
                                "Runner Up - TIP 2021 for Top Final Year Project (CEG, Chennai)",
                                "Editorial Team Member at CEG (2019–2021), created 225-year brochure",
                                "Graphic Designer at National Hub for Healthcare Development"
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[color:var(--background-soft)] p-5 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--background)] hover:shadow-lg transition-all duration-300">
                                    <p className="text-base text-[color:var(--foreground)]/90">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">Contact</h3>
                        <ul className="space-y-2 text-[color:var(--foreground)]/90">
                            <li>Email: <a href="mailto:akashranjan0212@gmail.com" className="text-[color:var(--link)] underline hover:text-[color:var(--link-hover)]">akashranjan0212@gmail.com</a></li>
                            <li>Phone: 7352770747</li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/akash-ranjan-67453bb1/" className="text-[color:var(--link)] underline hover:text-[color:var(--link-hover)]" target="_blank">linkedin.com/in/akash-ranjan</a></li>
                            <li>GitHub: <a href="https://github.com/skyvats" className="text-[color:var(--link)] underline hover:text-[color:var(--link-hover)]" target="_blank">github.com/skyvats</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutProject;
