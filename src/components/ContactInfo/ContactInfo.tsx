import React from "react";
//import characterImg from "../assets/character-contact.svg";

const contacts = [
    {
        icon: "✉️",
        label: "Email",
        value: "akashranjan0212@gmail.com",
        href: "mailto:akashranjan0212@gmail.com",
    },
    {
        icon: "📞",
        label: "Phone",
        value: "7352770747",
        href: "tel:7352770747",
    },
    {
        icon: "🔗",
        label: "LinkedIn",
        value: "linkedin.com/in/akash-ranjan",
        href: "https://linkedin.com/in/akash-ranjan-67453bb1/",
    },
    {
        icon: "💻",
        label: "GitHub",
        value: "github.com/skyvats",
        href: "https://github.com/skyvats",
    },
];

const ContactInfo: React.FC = () => {
    return (
        <section className="px-6 sm:px-12 py-16" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}>
            <div className="max-w-5xl mx-auto space-y-14">
                {/* Header */}
                <h3
                    className="text-4xl font-extrabold flex items-center gap-3"
                    style={{ color: "var(--text-heading)" }}
                >
                    <span className="text-5xl">📬</span> Let’s Connect
                </h3>

                {/* Character Image */}
                {/*<div className="flex justify-center">
                    <img
                        src={characterImg}
                        alt="Contact Illustration"
                        className="w-60 sm:w-72 drop-shadow-xl animate-float"
                    />
                </div>*/}

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {contacts.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="flex items-start gap-5 p-6 sm:p-8 rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderColor: "var(--border)",
                                color: "var(--text-primary)",
                                backgroundBlendMode: "overlay",
                                // for dark mode support
                                // uses CSS variable fallback based on body class
                            }}
                        >
                            <div
                                className="text-3xl sm:text-4xl"
                                style={{ color: "var(--primary)" }}
                            >
                                {item.icon}
                            </div>
                            <div>
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {item.label}
                                </p>
                                <p
                                    className="text-lg sm:text-xl font-semibold hover:underline transition-colors"
                                    style={{
                                        color: "var(--text-accent)",
                                    }}
                                >
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
