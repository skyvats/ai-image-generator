import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const styleOptions =  [
    {
        label: "Realistic",
        value: "realistic",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F3LP0GTqIRMNJ7ZvceyEH%252Frealistic.png%3Falt%3Dmedia%26token%3D9c55298c-7771-4860-8ff3-9454d8598cc5&width=300&dpr=4&quality=100&sign=ba70bd26&sv=2",
        description: "Achieve lifelike visuals with high realism and rich detail."
    },
    {
        label: "Anime",
        value: "anime",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6qyofvcw2NZqpj0oscDw%252Fanime.png%3Falt%3Dmedia%26token%3Da0e554f9-6513-4a71-a9db-e9fd42212afd&width=300&dpr=4&quality=100&sign=63a335c3&sv=2",
        description: "Perfect for manga, anime, and stylized character art."
    },
    {
        label: "Flux Schnell",
        value: "flux-schnell",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FgWHUyMfbEnC6ToBzEWu6%252Fflux.png%3Falt%3Dmedia%26token%3Dc35af315-53a7-46ef-a780-2801ca568352&width=300&dpr=4&quality=100&sign=c0aa8968&sv=2",
        description: "A fast-rendering Flux style ideal for dynamic compositions."
    },
    {
        label: "Flux Dev Fast",
        value: "flux-dev-fast",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FzLUz8ERX3xdaDmmHKP3L%252FRudyard_A_futuristic_cityscape_at_night_with_neon_lights._786f0887-6ca6-4721-a457-ab7263402e8e.png%3Falt%3Dmedia%26token%3Da9c9b9ea-30d4-4ddf-a530-1a74d8a0c007&width=300&dpr=4&quality=100&sign=1051ea17&sv=2",
        description: "Speed-optimized version of Flux for prototyping."
    },
    {
        label: "Flux Dev",
        value: "flux-dev",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252FhecPhL6O8qr0i5KZHufU%252Fflux-dev.png%3Falt%3Dmedia%26token%3D6692c714-6001-4164-8d63-bdbd86b7c450&width=300&dpr=4&quality=100&sign=b72acfe&sv=2",
        description: "Original Flux style with enhanced artistic control."
    },
    {
        label: "Imagine Turbo",
        value: "imagine-turbo",
        sample: "https://docs.imagine.art/~gitbook/image?url=https%3A%2F%2F1987912879-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F3iz53jxWE4tHyEpWPg7k%252Fuploads%252F6E1OWdhQP1IJU8ZlsLtQ%252Fresponse.png%3Falt%3Dmedia%26token%3D8608fa2f-859d-44a8-9828-d6334a88f9c4&width=300&dpr=4&quality=100&sign=be48141&sv=2",
        description: "Highly responsive and sharp — great for general use."
    },
];

const ProjectIntro: React.FC = () => {
    const { scrollY } = useScroll();
    const yImage = useTransform(scrollY, [0, 300], [0, -100]);
    const opacityHeroText = useTransform(scrollY, [0, 200], [1, 0.4]);

    const [selectedStyle, setSelectedStyle] = useState<string | null>('realistic');
    const [prompt, setPrompt] = useState('');
    const [selectedModel] = useState('1:1');

    const navigate = useNavigate();

    const handleCreateImage = () => {
        debugger;
        console.log('handleCreateImage called', { prompt, selectedStyle, selectedModel });

        if (prompt && selectedStyle) {
            navigate('/image-generator', {
                state: { prompt, selectedStyle, selectedModel }
            });
        } else {
            console.log('Navigation prevented: missing input');
        }
    };

    // For visual debugging
    console.log('Current Prompt and Style:', { prompt, selectedStyle });

    return (
        <section className="w-full relative py-12 px-4 sm:px-8 md:px-12 space-y-24 bg-[color:var(--background)]/90 backdrop-blur-md text-[color:var(--foreground)] transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[color:var(--primary)]/30 via-[color:var(--background)]/20 to-transparent dark:from-[color:var(--primary)]/20 dark:via-[color:var(--background)]/10 pointer-events-none" />

            {/* Hero Section */}
            <div className="w-full h-[60vh] overflow-hidden rounded-3xl sticky top-16 z-10 shadow-glow border border-[color:var(--border)]">
                <motion.div className="absolute w-full h-full" style={{ y: yImage }}>
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop"
                        alt="AI-generated futuristic artwork"
                        className="w-full h-[60vh] object-cover scale-105 brightness-90 dark:brightness-85"
                    />
                </motion.div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[color:var(--background)]/90 to-transparent dark:from-[color:var(--background)]/70 flex items-center justify-center px-6"
                    style={{ opacity: opacityHeroText }}
                >
                    <motion.h2
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] drop-shadow-2xl"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Create Stunning AI Art
                    </motion.h2>
                </motion.div>
            </div>

            {/* API Section */}
            <section className="w-full py-12 px-6 sm:px-8 md:px-12 bg-[color:var(--background)]/20 backdrop-blur-md rounded-xl shadow-glow animate-fade-in">
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

                <div className="mt-8 space-y-4">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your image prompt..."
                        className="w-full p-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-all duration-300"
                    />

                    <button
                        onClick={handleCreateImage}
                        className="z-50 mt-2 px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 text-base sm:text-lg"
                    >
                        Create Image
                    </button>

                    {/* Show warning if either input is missing */}
                    {(!prompt || !selectedStyle) && (
                        <p className="text-sm text-red-500">
                            Please enter a prompt and select a style to create an image.
                        </p>
                    )}
                </div>
            </section>

            {/* Style Options */}
            <div className="w-full space-y-20 z-10 relative">
                {styleOptions.map((style, index) => {
                    const isEven = index % 2 === 0;
                    const isSelected = selectedStyle === style.value;

                    return (
                        <motion.div
                            key={style.value}
                            className={`w-full flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'} gap-8 group`}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div
                                className={`w-full max-w-sm md:w-1/3 rounded-xl overflow-hidden shadow-glow border-4 transition-all duration-300 cursor-pointer ${
                                    isSelected ? 'border-[color:var(--primary)] scale-105' : 'border-[color:var(--border)]'
                                }`}
                                onClick={() => setSelectedStyle(style.value)}
                                whileHover={{ scale: 1.04, rotateZ: isEven ? 1.5 : -1.5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={style.sample}
                                    alt={style.label}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-[color:var(--foreground)]/15 transition duration-300" />
                            </motion.div>

                            <div className="md:w-2/3 text-center md:text-left space-y-3">
                                <motion.h3
                                    className="text-3xl font-bold text-[color:var(--primary)] drop-shadow-md"
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {style.label}
                                </motion.h3>
                                <motion.p
                                    className="text-[color:var(--foreground)]/80 text-base sm:text-lg leading-relaxed"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {style.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectIntro;
