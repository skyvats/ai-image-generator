import React from 'react';

const FeatureHighlights: React.FC = () => {
    const features = [
        { title: 'AI-Powered Insights', description: 'Harness vyro.ai/v2 for real-time data analysis.' },
        { title: 'Seamless Integration', description: 'Connect effortlessly with your systems.' },
        { title: 'Futuristic Design', description: 'Experience a visually stunning, responsive UI.' },
    ];

    return (
        <section className="py-12 px-6 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="p-6 bg-background/20 backdrop-blur-md rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                >
                    <h3 className="text-lg sm:text-xl font-semibold text-primary">{feature.title}</h3>
                    <p className="mt-2 text-foreground/80">{feature.description}</p>
                </div>
            ))}
        </section>
    );
};

export default FeatureHighlights;