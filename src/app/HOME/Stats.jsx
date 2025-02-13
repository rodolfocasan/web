// src/app/HOME/Stats.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';





const skillCategories = [
    {
        category: "Lenguajes de Programación",
        skills: [
            { name: "Python", level: 97, logoUrl: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" },
            { name: "JavaScript", level: 95, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" }
        ]
    },
    {
        category: "Frameworks Front-end",
        skills: [
            { name: "React", level: 95, logoUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
            { name: "Next.js", level: 93, logoUrl: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
            { name: "Vite.js", level: 88, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
            { name: "Tailwind CSS", level: 94, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { name: "Bootstrap", level: 93, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" }
        ]
    },
    {
        category: "Frameworks Back-end",
        skills: [
            { name: "Flask", level: 94, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
        ]
    },
    {
        category: "Entornos y Sistemas",
        skills: [
            { name: "Linux", level: 97, logoUrl: "https://www.svgrepo.com/show/349437/linux.svg" },
            { name: "Termux", level: 94, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Termux.svg" },
            { name: "Windows", level: 92, logoUrl: "https://www.svgrepo.com/show/355384/windows-legacy.svg" },
            { name: "Android", level: 96, logoUrl: "https://img.icons8.com/?size=256&id=GgyRdUL5k1fr&format=png" },
            { name: "Google Colab", level: 96, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
            { name: "HuggingFace", level: 95, logoUrl: "https://www.svgrepo.com/show/396671/hugging-face.svg" },
            { name: "Expo (React Native)", level: 89, logoUrl: "https://www.svgrepo.com/show/353722/expo.svg" },
            { name: "SSH (Secure Shell)", level: 91, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Unofficial_SSH_Logo.svg" }
        ]
    },
    {
        category: "Herramientas y Tecnologías",
        skills: [
            { name: "Git", level: 95, logoUrl: "https://www.svgrepo.com/show/452210/git.svg" },
            { name: "GitHub", level: 93, logoUrl: "https://www.svgrepo.com/show/475654/github-color.svg" },
            { name: "VirtualBox", level: 88, logoUrl: "https://img.icons8.com/?size=256&id=38792&format=png" },
            { name: "Ngrok", level: 91, logoUrl: "https://cdn.brandfetch.io/id3QqXlVah/w/400/h/400/theme/dark/icon.jpeg?c=1bx1741293876699id64Mup7acZ6AQBbxe&t=1732025337371" },
            { name: "CapacitorJS", level: 94, logoUrl: "https://www.svgrepo.com/show/353536/capacitorjs-icon.svg" }
        ]
    }
];

const SkillBar = ({ name, level, logoUrl }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex items-center space-x-4"
        >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <img
                    src={logoUrl}
                    alt={`${name} logo`}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">{name}</span>
                    <span className="text-sm font-bold text-gray-300">{level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0.3
                        }}
                        className="bg-blue-500 h-2.5 rounded-full"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default function Stats() {
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrders, setSortOrders] = useState(
        skillCategories.reduce((acc, category) => {
            acc[category.category] = 'descending'; // Valor por defecto: de mayor a menor
            return acc;
        }, {})
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const toggleSortOrder = (categoryName) => {
        setSortOrders(prevOrders => {
            const currentOrder = prevOrders[categoryName];
            return {
                ...prevOrders,
                [categoryName]: currentOrder === 'descending' ? 'ascending' : 'descending'
            };
        });
    };

    const sortSkills = (skills, categoryName) => {
        const sortOrder = sortOrders[categoryName];
        return [...skills].sort((a, b) =>
            sortOrder === 'descending'
                ? b.level - a.level
                : a.level - b.level
        );
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-12"
            >
                <AnimatePresence>
                    {isLoading ? (
                        <motion.div
                            key="loader"
                            className="flex justify-center items-center h-screen"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.h2
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200"
                            >
                                Mis Habilidades Técnicas
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {skillCategories.map((category, index) => (
                                    <motion.div
                                        key={category.category}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.2
                                        }}
                                        className="bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
                                            <h3 className="text-xl font-semibold text-gray-200">
                                                {category.category}
                                            </h3>
                                            <motion.button
                                                onClick={() => toggleSortOrder(category.category)}
                                                whileTap={{ scale: 0.9 }}
                                                className={`
                                                    text-gray-400 hover:text-white transition-all duration-300
                                                    ${sortOrders[category.category] === 'ascending'
                                                        ? 'text-blue-500 bg-blue-500/20 rounded-full p-1'
                                                        : ''
                                                    }
                                                `}
                                                aria-label="Ordenar habilidades"
                                            >
                                                <ArrowUpDown
                                                    size={20}
                                                    className={`
                                                        transition-colors duration-300
                                                        ${sortOrders[category.category] === 'ascending'
                                                            ? 'text-blue-500'
                                                            : ''
                                                        }
                                                    `}
                                                />
                                            </motion.button>
                                        </div>
                                        <AnimatePresence>
                                            <div className="space-y-4">
                                                {sortSkills(category.skills, category.category).map(skill => (
                                                    <SkillBar
                                                        key={skill.name}
                                                        name={skill.name}
                                                        level={skill.level}
                                                        logoUrl={skill.logoUrl}
                                                    />
                                                ))}
                                            </div>
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}