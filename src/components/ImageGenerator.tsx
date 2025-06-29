import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ImageGenerator: React.FC = () => {
    const { state } = useLocation();
    const [prompt, setPrompt] = useState(state?.prompt || '');
    const [selectedStyle, setSelectedStyle] = useState(state?.selectedStyle || 'realistic');
    const [selectedModel, setSelectedModel] = useState(state?.selectedModel || '1:1');
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState<string | null>(null);
    const [storedImages, setStoredImages] = useState<string[]>(JSON.parse(localStorage.getItem('generatedImages') || '[]'));

    const fetchImageForText = async (prompt: any) => {
        if (!prompt) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("style", selectedStyle);
        formData.append("aspect_ratio", selectedModel);

        try {
            const response = await axios.post(
                "https://api.vyro.ai/v2/image/generations",
                formData,
                {
                    headers: {
                        Authorization: "Bearer vk-fcsZYzYfcnML36He4Y263aHASiEbhwnDdVY7SFy8vFCcY5",
                    },
                    responseType: "blob",
                }
            );

            const imageUrl = URL.createObjectURL(response.data);
            setImageData(imageUrl);

            const updatedImages = [...storedImages, imageUrl];
            setStoredImages(updatedImages);
            localStorage.setItem("generatedImages", JSON.stringify(updatedImages));
        } catch (error) {
            console.error("Error fetching image:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (prompt && selectedStyle) {
            fetchImageForText(prompt);
        }
    }, [prompt, selectedStyle, selectedModel]);

    const handleUpdatePrompt = () => {
        if (prompt && selectedStyle) {
            fetchImageForText(prompt);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] p-6 flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full md:w-1/2 space-y-6">
                <div>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Edit your prompt..."
                        className="w-full p-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-all duration-300 h-32 resize-y"
                    />
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[color:var(--primary)]">Select Style</h3>
                    {['realistic', 'anime', 'flux-schnell', 'flux-dev-fast', 'flux-dev', 'imagine-turbo'].map((style) => (
                        <button
                            key={style}
                            onClick={() => setSelectedStyle(style)}
                            className={`px-4 py-2 rounded-lg ${selectedStyle === style ? 'bg-[color:var(--primary)] text-white' : 'bg-[color:var(--background)] border border-[color:var(--border)] hover:bg-[color:var(--primary)]/20'} transition-all duration-300`}
                        >
                            {style}
                        </button>
                    ))}
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[color:var(--primary)]">Image Ratio</h3>
                    {['1:1', '4:3', '16:9'].map((ratio) => (
                        <button
                            key={ratio}
                            onClick={() => setSelectedModel(ratio)}
                            className={`px-4 py-2 rounded-lg ${selectedModel === ratio ? 'bg-[color:var(--primary)] text-white' : 'bg-[color:var(--background)] border border-[color:var(--border)] hover:bg-[color:var(--primary)]/20'} transition-all duration-300`}
                        >
                            {ratio}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleUpdatePrompt}
                    className="px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300"
                    disabled={!prompt || !selectedStyle}
                >
                    Update Prompt
                </button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 space-y-6">
                {loading ? (
                    <div className="w-full h-64 flex items-center justify-center bg-[color:var(--background)]/50 rounded-lg">
                        <p>Loading...</p>
                    </div>
                ) : imageData ? (
                    <img src={imageData} alt="Generated" className="w-full h-64 object-cover rounded-lg" />
                ) : null}
                <div>
                    <h3 className="text-xl font-semibold text-[color:var(--primary)]">Recent Images</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        {storedImages.map((img, index) => (
                            <img key={index} src={img} alt={`Generated ${index}`} className="w-full h-32 object-cover rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;