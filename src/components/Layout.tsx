// src/components/Layout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/react.svg';
import { Github, Linkedin } from "lucide-react";
import MobileMenu from "./MobileMenu.tsx";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen w-full font-sans bg-[color:var(--background)] text-[color:var(--foreground)]">
            {/* Topbar */}
            <header className="w-full px-6 py-4 sm:px-10 sm:py-6 bg-[color:var(--background)]/95 backdrop-blur-lg sticky top-0 z-30 border-b border-[color:var(--border)] shadow-lg">
                <div className="flex items-center justify-between w-full">

                    {/* Left side: Mobile Menu */}
                    <div className="sm:hidden z-10">
                        <MobileMenu />
                    </div>

                    {/* Center: Logo + Text */}
                    <div className="flex items-center space-x-4">
                        <img
                            src={Logo}
                            alt="AI Horizon Logo"
                            className="h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <h1 className="whitespace-nowrap text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]">
                            AI Horizon
                        </h1>
                    </div>

                    {/* Right side: Desktop Nav + Theme Toggle */}
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        {/* Navigation - shown only on sm+ */}
                        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-8">
                            <Link to="/" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors duration-200">
                                Home
                            </Link>
                            <Link to="/about" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors duration-200">
                                About
                            </Link>
                        </nav>

                        {/* Always visible ThemeToggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Main content */}
            <Outlet />

            {/* Footer */}
            <footer className="w-full py-8 bg-[color:var(--background)]/95 border-t border-[color:var(--border)] text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[color:var(--muted)]">
                    <p>&copy; 2025 AI Horizon. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/skyvats"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[color:var(--foreground)] transition"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akash-ranjan-14a849328/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[color:var(--foreground)] transition"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
