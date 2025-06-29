import React from 'react';
import ProjectIntro from '../components/ProjectIntro';
import Logo from '../assets/react.svg';
import ThemeToggle from '../components/ThemeToggle';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[color:var(--background)] to-[color:var(--background)]/80 text-[color:var(--foreground)] transition-colors duration-300 relative overflow-x-hidden">
            {/* Header */}
            <header className="w-full flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 bg-[color:var(--background)]/95 backdrop-blur-md sticky top-0 z-20 border-b border-[color:var(--border)] shadow-glow">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <img
                        src={Logo}
                        alt="Project Logo"
                        className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110 hover:rotate-12"
                    />
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]">
                        AI Horizon
                    </h1>
                </div>
                <nav className="flex items-center space-x-4 sm:space-x-6">
                    <a href="/" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors">
                        Home
                    </a>
                    <a href="/about" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors">
                        About
                    </a>
                    <a href="/contact" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors">
                        Contact
                    </a>
                    <ThemeToggle />
                </nav>
            </header>

            {/* Main */}
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 relative z-10">
                <ProjectIntro />

                {/*<section className="w-full py-12 px-6 sm:px-8 md:px-12 bg-[color:var(--background)]/20 backdrop-blur-md rounded-xl shadow-glow animate-fade-in">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]">
                        About vyro.ai/v2 API
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[color:var(--foreground)]/80 max-w-3xl mx-auto sm:mx-0 animate-slide-up">
                        Unlock the future with the vyro.ai/v2 API, a powerhouse for AI-driven innovation. From natural language to image generation, AI Horizon delivers stunning results. Learn more at{' '}
                        <a
                            href="https://vyro.ai/api"
                            className="text-[color:var(--primary)] hover:underline font-medium transition-colors"
                        >
                            vyro.ai/api
                        </a>.
                    </p>
                    <div className="mt-8 flex justify-center sm:justify-start">
                        <a
                            href="/learn-more"
                            className="px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 text-base sm:text-lg"
                        >
                            Discover More
                        </a>
                    </div>
                </section>*/}

                <div style={{ height: '150vh' }} />
            </main>
        </div>
    );
};

export default Home;