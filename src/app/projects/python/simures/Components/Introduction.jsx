// src/app/projects/python/simures/Components/Introduction.jsx
"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    FaDesktop,
    FaTerminal,
    FaCheckCircle,
    FaCode,
    FaLinux
} from 'react-icons/fa'





export default function Introduction() {
    const [logoLoaded, setLogoLoaded] = useState(false);

    // URL del logotipo de SimuRES
    const logoUrl = 'https://raw.githubusercontent.com/rodolfocasan/simures/main/Storage/Icons/favicon_01.png';

    return (
        <React.Fragment>
            {/* Contenedor principal con padding ajustado para evitar superposición con navegación */}
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Sección del Logotipo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <img
                            src={logoUrl}
                            alt="SimuRES Logo"
                            onLoad={() => setLogoLoaded(true)}
                            className="object-contain w-48 h-48"
                        />
                    </motion.div>

                    {/* Encabezado con animación de entrada */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            SimuRES
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            Simulador de Resolución Multiplataforma
                        </p>
                    </motion.div>

                    {/* Sección de descripción con animación */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaDesktop className="mr-3 text-blue-400" />
                            Descripción del Proyecto
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            SimuRES es una herramienta multiplataforma (Linux) diseñada para modificar y simular resoluciones de pantalla mediante escalado, ofreciendo tanto una interfaz gráfica intuitiva como una potente línea de comandos.
                        </p>
                    </motion.div>

                    {/* Características principales con animación de tarjetas */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delayChildren: 0.6,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Tarjeta de Modo GUI */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaDesktop className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Modo GUI</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-400" />
                                    Selector de pantallas múltiples
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-400" />
                                    Slider de precisión (1.0x - 20.0x)
                                </li>
                            </ul>
                        </motion.div>

                        {/* Tarjeta de Modo CLI */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaTerminal className="text-4xl text-purple-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Modo Línea de Comandos</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <FaCode className="mr-2 text-purple-400" />
                                    Cambios rápidos desde terminal
                                </li>
                                <li className="flex items-center">
                                    <FaLinux className="mr-2 text-gray-200" />
                                    Integración con scripts
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </React.Fragment>
    )
}