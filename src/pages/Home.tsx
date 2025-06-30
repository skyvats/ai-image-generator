import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIntro from '../components/ProjectIntro';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[color:var(--background)] via-[color:var(--background)]/90 to-[color:var(--background-soft)] text-[color:var(--foreground)] transition-colors duration-500 font-sans">

            {/* Hero Section */}
            <section className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-[color:var(--primary)]/20 to-[color:var(--secondary)]/20 py-16">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 text-center space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] animate-fade-in">
                        Unleash Your Creativity with AI Horizon
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-[color:var(--foreground)]/80 max-w-3xl mx-auto">
                        Transform your ideas into stunning visuals with our AI-powered image generation, powered by the Vyro API.
                    </p>
                    <Link
                        to="/image-generator"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Generate Now
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <main className="w-full">
                {/* Project Intro Section */}
                <section className="w-full">
                    <ProjectIntro />
                </section>

                {/* Why AI Horizon Section */}
                <section className="w-full py-12">
                    <div className="w-full max-w-6xl mx-auto space-y-8">
                        <h3 className="text-3xl sm:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]">
                            Why Choose AI Horizon?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Unlimited Creativity",
                                    description: "Craft unique prompts to generate images that match your vision.",
                                },
                                {
                                    title: "High-Quality Renders",
                                    description: "Choose from multiple styles like realistic, anime, and more.",
                                },
                                {
                                    title: "Responsive Design",
                                    description: "Seamless experience across devices with a modern UI.",
                                },
                                {
                                    title: "Fast Generation",
                                    description: "Powered by the Vyro API for quick, stunning results.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-[color:var(--background)]/50 border border-[color:var(--border)] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <h4 className="text-xl font-semibold text-[color:var(--primary)] mb-2">{feature.title}</h4>
                                    <p className="text-[color:var(--muted)]">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="w-full py-12 text-center">
                    <div className="w-full max-w-4xl mx-auto space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[color:var(--foreground)]">
                            Ready to Explore?
                        </h3>
                        <p className="text-lg text-[color:var(--muted)]">
                            Dive into the world of AI-driven creativity with AI Horizon.
                        </p>
                        <Link
                            to="/learn-more"
                            className="inline-block px-8 py-4 bg-[color:var(--primary)] text-white rounded-full font-semibold text-lg hover:bg-[color:var(--secondary)] hover:shadow-lg transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 bg-[color:var(--background)]/95 border-t border-[color:var(--border)] text-center">
                <p className="text-[color:var(--muted)]">
                    &copy; 2025 AI Horizon. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;