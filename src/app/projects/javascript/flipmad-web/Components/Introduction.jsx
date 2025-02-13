// src/app/projects/javascript/flipmad-web/Components/Introduction.jsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TbGoGame } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdTimer } from 'react-icons/md';





export default function Introduction() {
    // Definición de las características del juego
    const features = [
        {
            title: "Niveles Únicos",
            description: "Cada nivel presenta un nuevo desafío con diferentes animaciones y dificultades emocionantes.",
            icon: <TbGoGame className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
        },
        {
            title: "Sistema de Monedas",
            description: "Gana monedas mientras juegas y guarda tu progreso para continuar donde lo dejaste.",
            icon: <LiaCoinsSolid className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
        },
        {
            title: "Contrarreloj",
            description: "¡Encuentra y empareja las cartas antes de que se acabe el tiempo!",
            icon: <MdTimer className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
        }
    ];

    // Configuración de las animaciones del contenedor principal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    // Configuración de las animaciones de los elementos individuales
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="relative min-h-screen w-full pt-28 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black" />

            {/* Formas animadas del fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full -rotate-12 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Sección del encabezado con logo y título */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    {/* Contenedor del logo con efectos */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl transform -rotate-6" />
                        <img
                            src="https://raw.githubusercontent.com/rodolfocasan/flipmad-multiplatform/main/dist/android-chrome-512x512.png"
                            alt="FlipMAD Logo"
                            className="relative w-full h-full object-contain rounded-2xl shadow-lg 
                                     shadow-purple-500/30 hover:shadow-purple-500/50 
                                     transition-all duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Título principal con efecto de gradiente */}
                    <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 mb-6 tracking-tight">
                        FlipMAD
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
                        ¡Pon a prueba tu memoria y reflejos en este emocionante juego de cartas!
                    </p>
                </motion.div>

                {/* Contenedor del video de YouTube */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-video w-full max-w-4xl mx-auto mb-16 sm:mb-20 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl transform -rotate-3" />
                    <iframe
                        className="relative w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/lJj1lSm8jwA"
                        title="FlipMAD Gameplay Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>

                {/* Grid de características */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            {/* Tarjeta de característica con efectos hover */}
                            <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl p-8
                                          border border-purple-500/20 group-hover:border-purple-500/40
                                          transition-all duration-500 group-hover:bg-white/10
                                          relative overflow-hidden">
                                {/* Overlay de gradiente en hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex flex-col items-center">
                                    {/* Icono con animación en hover */}
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center group-hover:text-purple-200 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Texto final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-16 sm:mt-20"
                >
                    <p className="text-lg sm:text-xl text-gray-400 px-4 leading-relaxed">
                        ¡Prepárate para una experiencia única donde la diversión y el desafío se combinan!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}