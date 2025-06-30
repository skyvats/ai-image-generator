import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Download, Expand } from 'lucide-react';
import { motion } from 'framer-motion';
import { styleOptions } from '../services/styleOptions.tsx';

import CharacterFloat from '../assets/favpng_25637c9388e577b381a2f8b6ca209ca1.png';

const ImageGenerator: React.FC = () => {
    const { state } = useLocation();
    const [prompt, setPrompt] = useState(state?.prompt || '');
    const [selectedStyle, setSelectedStyle] = useState(state?.selectedStyle || 'realistic');
    const [selectedModel, setSelectedModel] = useState(state?.selectedModel || '1:1');
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState<string | null>(null);
    const [storedImages, setStoredImages] = useState<string[]>(JSON.parse(localStorage.getItem('generatedImages') || '[]'));

    const fetchImageForText = async (prompt: string) => {
        if (!prompt) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("style", selectedStyle);
        formData.append("aspect_ratio", selectedModel);

        const tokens = [
            "vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5",
            "vk-G3bYvHnonDWuoFGIEwI7Be3VDO6EcjU2qr29JdqbuIBl6c5"
        ];

        for (const token of tokens) {
            try {
                const response = await axios.post(
                    "https://api.vyro.ai/v2/image/generations",
                    formData,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        responseType: "blob",
                    }
                );

                const blob = response.data;
                if (!blob.type.startsWith("image/")) continue;

                const base64 = await blobToBase64(blob);
                setImageData(base64);
                const updatedImages = [...storedImages, base64];
                setStoredImages(updatedImages);
                localStorage.setItem("generatedImages", JSON.stringify(updatedImages));
                break;
            } catch {
                continue;
            }
        }

        setLoading(false);
    };

    const blobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const handleUpdatePrompt = () => {
        if (prompt && selectedStyle) fetchImageForText(prompt);
    };

    const handleClearHistory = () => {
        localStorage.removeItem('generatedImages');
        setStoredImages([]);
    };

    const handleDownload = (img: string) => {
        const a = document.createElement('a');
        a.href = img;
        a.download = 'generated-image.png';
        a.click();
    };

    const handleFullscreen = (img: string) => {
        const newTab = window.open();
        if (newTab) {
            newTab.document.body.innerHTML = `<img src='${img}' style='width:100vw;height:auto;'>`;
        }
    };

    return (
        <div className="relative min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] p-6 sm:p-10 overflow-hidden">
            {/* Glow Backgrounds */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/3 w-72 h-72 bg-[color:var(--primary)]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-0 w-96 h-96 bg-[color:var(--secondary)]/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/3" />
            </div>

            {/* Floating Character */}
            <motion.img
                src={CharacterFloat}
                alt="Character"
                className="absolute top-[-60px] right-8 w-32 rotate-6 z-10"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            />

            <div className="grid md:grid-cols-4 gap-6 z-10 relative">
                {/* Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-1 space-y-6 bg-[color:var(--background-alt)] p-6 rounded-xl border border-[color:var(--border)] shadow-xl"
                >
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your creative prompt..."
                        className="w-full p-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] focus:ring-2 focus:ring-[color:var(--primary)] h-32"
                    />
                    <div>
                        <h4 className="font-semibold mb-2">Styles</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {styleOptions.map(({ label, value, sample }: any) => (
                                <button
                                    key={label}
                                    onClick={() => setSelectedStyle(value)}
                                    className={`rounded-lg border-2 p-1 transition-all ${
                                        selectedStyle === value
                                            ? 'border-[color:var(--primary)]'
                                            : 'border-transparent hover:border-[color:var(--primary)]/50'
                                    }`}
                                >
                                    <img src={sample} alt={label} className="rounded-md w-full h-20 object-cover" />
                                    <p className="text-xs mt-1 text-center">{label}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Aspect Ratio</h4>
                        <div className="flex gap-2">
                            {["1:1", "4:3", "16:9"].map((ratio) => (
                                <button
                                    key={ratio}
                                    onClick={() => setSelectedModel(ratio)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                                        selectedModel === ratio
                                            ? 'bg-[color:var(--primary)] text-white'
                                            : 'border border-[color:var(--border)] hover:bg-[color:var(--primary)]/20'
                                    }`}
                                >
                                    {ratio}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleUpdatePrompt}
                        disabled={!prompt}
                        className="w-full py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full hover:shadow-md transition-all"
                    >
                        Generate Image
                    </button>
                </motion.div>

                {/* Main Image Viewer + Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-3 space-y-8"
                >
                    <div className="relative w-full h-[400px] bg-[color:var(--background-soft)] border border-[color:var(--border)] rounded-2xl flex items-center justify-center">
                        {loading ? (
                            <p className="text-lg animate-pulse">Generating image...</p>
                        ) : imageData ? (
                            <div className="relative w-full h-full">
                                <img src={imageData} alt="Generated" className="w-full h-full object-cover rounded-2xl" />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <button onClick={() => handleFullscreen(imageData)} className="p-2 bg-white/70 rounded-full">
                                        <Expand size={18} />
                                    </button>
                                    <button onClick={() => handleDownload(imageData)} className="p-2 bg-white/70 rounded-full">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted">Your generated image will appear here.</p>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-lg font-bold text-[color:var(--primary)]">Recent Images</h4>
                            <button onClick={handleClearHistory} className="text-sm text-red-500 hover:text-red-700">
                                Clear History
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {storedImages.map((img, i) => (
                                <div key={i} className="relative group">
                                    <img
                                        src={img}
                                        alt={`Recent ${i}`}
                                        className="w-full h-32 object-cover rounded-xl border border-[color:var(--border)] shadow-md"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                                        <button onClick={() => handleFullscreen(img)} className="p-2 bg-white/80 rounded-full">
                                            <Expand size={16} />
                                        </button>
                                        <button onClick={() => handleDownload(img)} className="p-2 bg-white/80 rounded-full">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ImageGenerator;
