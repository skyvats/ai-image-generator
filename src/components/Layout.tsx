// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen w-full font-sans bg-[color:var(--background)] text-[color:var(--foreground)]">
            {/* Shared Topbar */}
            <header className="w-full flex flex-col sm:flex-row items-center justify-between px-6 py-4 sm:px-10 sm:py-6 bg-[color:var(--background)]/95 backdrop-blur-lg sticky top-0 z-30 border-b border-[color:var(--border)] shadow-lg">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <img
                        src={Logo}
                        alt="AI Horizon Logo"
                        className="h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                    />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]">
                        AI Horizon
                    </h1>
                </div>
                <nav className="flex items-center space-x-4 sm:space-x-8">
                    <Link to="/" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors duration-200">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors duration-200">
                        About
                    </Link>
                    <Link to="/contact" className="text-sm sm:text-base font-medium hover:text-[color:var(--primary)] transition-colors duration-200">
                        Contact
                    </Link>
                    <ThemeToggle />
                </nav>
            </header>

            {/* Main Page Content */}
            <Outlet />
        </div>
    );
};

export default Layout;
