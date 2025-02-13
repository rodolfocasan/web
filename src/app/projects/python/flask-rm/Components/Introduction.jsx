// src/app/projects/python/flask-rm/Components/Introduction.jsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaServer,
    FaMicrochip,
    FaCheckCircle,
    FaNetworkWired,
    FaDesktop,
    FaMemory,
    FaHdd,
    FaBatteryThreeQuarters
} from 'react-icons/fa';





export default function Introduction() {
    const [logoLoaded, setLogoLoaded] = useState(false);

    // URL del logo del monitor de recursos
    const logoUrl = 'https://raw.githubusercontent.com/rodolfocasan/flask-resources-monitor/main/web/favicon.svg';

    return (
        <React.Fragment>
            {/* Contenedor principal con gradiente verde oscuro */}
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Sección del Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <img
                            src={logoUrl}
                            alt="Flask Monitor Logo"
                            onLoad={() => setLogoLoaded(true)}
                            className="object-contain w-48 h-48"
                        />
                    </motion.div>

                    {/* Encabezado Principal */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                            Flask Resources Monitor
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            Monitor de Sistema en Tiempo Real
                        </p>
                    </motion.div>

                    {/* Descripción Principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaServer className="mr-3 text-emerald-400" />
                            Descripción del Proyecto
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Un servidor web desarrollado en Python que proporciona un monitor de sistema en tiempo real mediante WebSocket.
                            Permite visualizar el consumo de recursos de tu PC desde cualquier dispositivo conectado a la misma red.
                        </p>
                    </motion.div>

                    {/* Grid de Características */}
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
                        {/* Monitoreo de Recursos */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaMicrochip className="text-4xl text-emerald-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Monitoreo de Recursos</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <FaMemory className="mr-2 text-emerald-400" />
                                    CPU y Memoria RAM
                                </li>
                                <li className="flex items-center">
                                    <FaHdd className="mr-2 text-emerald-400" />
                                    Espacio en Disco
                                </li>
                                <li className="flex items-center">
                                    <FaBatteryThreeQuarters className="mr-2 text-emerald-400" />
                                    Estado de Batería
                                </li>
                            </ul>
                        </motion.div>

                        {/* Características Técnicas */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaNetworkWired className="text-4xl text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Características Técnicas</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <FaDesktop className="mr-2 text-teal-400" />
                                    Interfaz Web Intuitiva
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-teal-400" />
                                    Multiplataforma
                                </li>
                                <li className="flex items-center">
                                    <FaServer className="mr-2 text-teal-400" />
                                    Conexión WebSocket
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </React.Fragment>
    );
}