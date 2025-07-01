import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Download, Expand } from 'lucide-react';
import { motion } from 'framer-motion';
import { styleOptions } from '../services/styleOptions.tsx';

const ImageGenerator: React.FC = () => {
    const { state } = useLocation();
    const [prompt, setPrompt] = useState(state?.prompt || '');
    const [selectedStyle, setSelectedStyle] = useState(state?.selectedStyle || 'realistic');
    const [selectedModel, setSelectedModel] = useState(state?.selectedModel || '1:1');
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState<string | null>(null);
    const [storedImages, setStoredImages] = useState<string[]>(JSON.parse(localStorage.getItem('generatedImages') || '[]'));

    const hasGeneratedFromState = useRef(false); // To ensure one-time generation only

    const aspectRatios: Record<string, string> = {
        "1:1": "aspect-square",
        "4:3": "aspect-[4/3]",
        "16:9": "aspect-[16/9]",
    };

    const fetchImageForText = async (prompt: string) => {
        if (!prompt) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("style", selectedStyle);
        formData.append("aspect_ratio", selectedModel);

        const tokens = [
            "vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5_",
            "vk-G3bYvHnonDWuoFGIEwI7Be3VDO6EcjU2qr29JdqbuIBl6c5_"
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

    // 🔁 Trigger once if prompt was passed via props
    useEffect(() => {
        if (
            !hasGeneratedFromState.current &&
            state?.prompt &&
            state.prompt.trim().length > 0 &&
            selectedStyle &&
            selectedModel
        ) {
            hasGeneratedFromState.current = true;
            fetchImageForText(state.prompt);
        }
    }, [state, selectedStyle, selectedModel]);


    return (
        <div className="relative min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] p-6 sm:p-10 overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[30%] w-80 h-80 bg-[color:var(--primary)]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-[color:var(--secondary)]/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="grid md:grid-cols-4 gap-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-1 space-y-6 bg-[color:var(--background-alt)] p-6 rounded-2xl border border-[color:var(--border)] shadow-xl"
                >
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe your creative vision..."
                        className="w-full p-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] focus:ring-2 focus:ring-[color:var(--primary)] h-32"
                    />
                    <div>
                        <h4 className="font-semibold mb-2">Select Style</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {styleOptions.map(({ label, value, sample }: any) => (
                                <button
                                    key={label}
                                    onClick={() => setSelectedStyle(value)}
                                    className={`rounded-xl border-2 p-1 transition-all relative group ${
                                        selectedStyle === value
                                            ? 'border-[color:var(--primary)] shadow-[0_0_8px_var(--primary)]'
                                            : 'border-transparent hover:border-[color:var(--primary)]/50'
                                    }`}
                                >
                                    <img src={sample} alt={label} className="rounded-md w-full h-20 object-cover" />
                                    <p className="text-xs mt-1 text-center font-medium text-[color:var(--foreground)]">{label}</p>
                                    {selectedStyle === value && (
                                        <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[color:var(--primary)] animate-ping" />
                                    )}
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
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                        selectedModel === ratio
                                            ? 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white shadow-md'
                                            : 'border border-[color:var(--border)] hover:bg-[color:var(--primary)]/10'
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
                        className="w-full py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                    >
                        {loading ? 'Generating...' : 'Generate Image'}
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-3 space-y-8"
                >
                    <div className={`relative w-full ${aspectRatios[selectedModel]} bg-[color:var(--background-soft)] border border-[color:var(--border)] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300`}>
                        {loading ? (
                            <p className="text-lg animate-pulse text-[color:var(--primary)] font-semibold">Generating image...</p>
                        ) : imageData ? (
                            <div className="relative w-full h-full">
                                <img src={imageData} alt="Generated" className="w-full h-full object-contain rounded-2xl" />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <button onClick={() => handleFullscreen(imageData)} className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:scale-110 transition">
                                        <Expand size={18} />
                                    </button>
                                    <button onClick={() => handleDownload(imageData)} className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:scale-110 transition">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted font-medium">Your generated image will appear here.</p>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-lg font-bold text-[color:var(--primary)]">Recent Images</h4>
                            <button onClick={handleClearHistory} className="text-sm text-red-500 hover:text-red-700 transition">
                                Clear History
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {storedImages.map((img, i) => (
                                <div key={i} className="relative group overflow-hidden rounded-xl border border-[color:var(--border)] shadow-md">
                                    <img
                                        src={img}
                                        alt={`Recent ${i}`}
                                        className="w-full h-32 object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-300">
                                        <button onClick={() => handleFullscreen(img)} className="p-2 bg-white/80 rounded-full hover:scale-110 transition">
                                            <Expand size={16} />
                                        </button>
                                        <button onClick={() => handleDownload(img)} className="p-2 bg-white/80 rounded-full hover:scale-110 transition">
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
