// src/components/MobileMenu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sm:hidden relative z-50">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-[color:var(--background-soft)] transition-colors"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6 text-[color:var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-12 left-2 w-44 bg-[color:var(--background)] border border-[color:var(--border)] rounded-xl shadow-xl p-4 animate-fade-slide-down">
                    <nav className="flex flex-col space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="text-[color:var(--foreground)] text-sm font-medium hover:text-[color:var(--primary)] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-[color:var(--foreground)] text-sm font-medium hover:text-[color:var(--primary)] transition-colors"
                        >
                            About
                        </Link>
                        <div className="pt-2 text-xs text-[color:var(--muted)] border-t border-[color:var(--border)] mt-2">
                            v1.0.0
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
