// src/app/projects/javascript/flipmad-web/Components/Play.jsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { PiBrainBold } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';





export default function Play() {
    // Configuración de las animaciones del contenedor
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    // Configuración de las animaciones de los elementos
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

    // Función para manejar el clic en el botón de jugar
    const handlePlayClick = () => {
        window.open('https://flipmad-multiplatform.vercel.app/', '_blank');
    };

    // Información sobre los beneficios del juego
    const benefits = [
        {
            title: "Ejercita tu Memoria",
            description: "Entrena tu cerebro de forma divertida y efectiva, mejorando tu capacidad de retención y concentración.",
            icon: <PiBrainBold className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
        },
        {
            title: "Prevención del Alzheimer",
            description: "Los juegos de memoria son una herramienta valiosa para mantener tu mente activa y reducir el riesgo de deterioro cognitivo.",
            icon: <MdOutlineHealthAndSafety className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
        }
    ];

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
                {/* Sección del título principal */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 mb-6">
                        Juega por tu Salud Mental
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                        FlipMAD ahora es completamente gratuito, dedicado a promover la salud mental y ayudar en la prevención del Alzheimer a través del ejercicio cognitivo.
                    </p>
                </motion.div>

                {/* Grid de beneficios */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-16"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl p-8
                                          border border-purple-500/20 group-hover:border-purple-500/40
                                          transition-all duration-500 group-hover:bg-white/10
                                          relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex flex-col items-center">
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center group-hover:text-purple-200 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Botón de jugar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <button
                        onClick={handlePlayClick}
                        className="group relative inline-flex items-center justify-center px-8 py-4
                                 overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-purple-700
                                 text-white font-bold text-lg sm:text-xl
                                 transition-all duration-300 ease-out
                                 hover:from-purple-600 hover:to-purple-800
                                 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
                                 transform hover:scale-105"
                    >
                        <span className="mr-3">
                            <FaPlay className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                        </span>
                        Jugar En Línea Ahora
                    </button>
                </motion.div>
            </div>
        </section>
    );
}