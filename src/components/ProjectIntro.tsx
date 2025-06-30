import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VectorImage from "../assets/vecteezy_a-digital-illustration-of-a-persons-head-with-a-colorful_46885540.jpg";
import BoyThinking from "../assets/favpng_25637c9388e577b381a2f8b6ca209ca1.png";

const ProjectIntro: React.FC = () => {
    const { scrollY } = useScroll();
    const yImage = useTransform(scrollY, [0, 400], [0, -120]);
    const scaleImage = useTransform(scrollY, [0, 400], [1.05, 1.15]);

    const [selectedStyle] = useState('realistic');
    const [prompt, setPrompt] = useState('');
    const selectedModel = '1:1';

    const navigate = useNavigate();

    const handleCreateImage = () => {
        if (prompt && selectedStyle) {
            navigate('/image-generator', {
                state: { prompt, selectedStyle, selectedModel }
            });
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <section className="w-full mx-auto relative py-10 px-4 sm:px-8 space-y-20 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 left-1/3 w-72 h-72 bg-[color:var(--primary)]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--secondary)]/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/3" />
                    <div className="absolute top-1/3 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl -translate-x-1/2" />
                </div>

                {/* Sticky Hero Section */}
                <div className="w-full h-[50vh] rounded-3xl sticky top-16 z-10 shadow-glow border border-[color:var(--border)] overflow-hidden">
                    <motion.div className="absolute w-full h-full" style={{ y: yImage, scale: scaleImage }}>
                        <img
                            src={VectorImage}
                            alt="AI-generated futuristic artwork"
                            className="w-full h-full object-cover brightness-[.88] dark:invert dark:brightness-[1.1]"
                            style={{ height: 650 }}
                        />
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[color:var(--background)] to-transparent flex flex-col items-center justify-center px-4 text-center"
                    >
                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--primary)] via-pink-500 to-[color:var(--secondary)] drop-shadow-2xl"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Create Stunning AI Art
                        </motion.h2>
                        <p className="mt-3 text-lg text-[color:var(--muted)] max-w-xl">
                            Explore styles, write prompts, and bring your imagination to life with powerful AI.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:text-left gap-8 px-4 md:px-12">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Bring Your <span className="text-[color:var(--primary)]">Imagination</span> to Life
                        </h2>
                        <p className="text-base text-[color:var(--muted)]">
                            Generate stunning AI-powered images from text prompts using dynamic styles.
                        </p>
                    </div>
                    <motion.img
                        src={BoyThinking}
                        alt="Hero"
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition"
                        style={{ height: 200 }}
                        initial={{ rotate: -6, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </section>


                {/* Prompt Input Section */}
                <div
                    id="generate"
                    className="relative grid grid-cols-1 gap-10 bg-[color:var(--background)]/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-glow border border-[color:var(--border)]"
                >
                    <div className="absolute -top-16 right-4 w-32 h-32 rounded-full bg-[color:var(--primary)]/10 blur-2xl z-0" />
                    <motion.img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712040.png"
                        alt="AI character"
                        className="w-24 absolute -top-28 left-11/12 rotate-6"
                        initial={{ opacity: 0, y: -120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    />
                    <div className="space-y-4 relative z-10">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe your dream scene..."
                            className="w-full p-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                        />
                        <button
                            onClick={handleCreateImage}
                            className="px-5 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Create Image
                        </button>
                        {(!prompt || !selectedStyle) && (
                            <p className="text-sm text-red-500">Please enter a prompt and select a style to continue.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectIntro;
