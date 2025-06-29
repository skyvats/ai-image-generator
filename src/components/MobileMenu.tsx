import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md p-4 shadow-lg animate-slide-down">
                    <button className="block py-2 text-sm hover:text-primary transition-colors w-full text-left">
                        Home
                    </button>
                    <button className="block py-2 text-sm hover:text-primary transition-colors w-full text-left">
                        About
                    </button>
                    <div className="block py-2 text-sm text-foreground/80">v1.0.0</div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;