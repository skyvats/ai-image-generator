import React, { useState } from 'react';

const APIDemo: React.FC = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        setResponse('Simulated API response for: ' + input);
    };

    return (
        <section className="py-10 px-6 sm:px-8 md:px-12 bg-background/50 rounded-xl shadow-md animate-fade-in transition-transform duration-300 hover:scale-[1.01]">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
                Try the vyro.ai/v2 API
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter text for API"
                />
                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-md"
                >
                    Submit
                </button>
            </div>
            {response && <p className="mt-4 text-foreground/80 animate-slide-up">{response}</p>}
        </section>
    );
};

export default APIDemo;