// src/app/projects/python/chrome-session-manager/Components/Introduction.jsx
"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDesktop, FaChrome, FaCog, FaFolderOpen } from 'react-icons/fa'





export default function Introduction() {
    // Estado para manejar la carga del logo y la imagen
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [logoError, setLogoError] = useState(false)

    // URL del logo de GitHub
    const logoUrl = 'https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/main/Storage/Settings/icons/favicon.png'

    // Efecto para manejar la carga del logo
    useEffect(() => {
        const img = new Image()
        img.src = logoUrl
        img.onload = () => setLogoLoaded(true)
        img.onerror = () => setLogoError(true)
    }, [])

    // Loader animado con un diseño más moderno
    const Loader = () => (
        <div className="fixed inset-0 bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#121212] flex items-center justify-center">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                    borderRadius: ["20%", "40%", "60%", "20%"]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-24 h-24 bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#2c3e50] shadow-2xl rounded-xl"
            />
        </div>
    )

    // Si el logo no está cargado, mostrar loader
    if (!logoLoaded && !logoError) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#121212] text-white py-24 md:py-32 px-6 md:px-12 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto space-y-8"
            >
                {/* Logo y Título */}
                <div className="flex flex-col items-center space-y-4">
                    {!logoError && (
                        <motion.img
                            src={logoUrl}
                            alt="Chrome Session Manager Logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-24 h-24 object-contain drop-shadow-xl"
                        />
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#D1D1D1] leading-tight">
                        Chrome Session Manager
                    </h1>
                </div>

                {/* Descripción principal */}
                <p className="text-lg md:text-xl text-center text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Gestiona múltiples sesiones paralelas de Google Chrome con una interfaz moderna, intuitiva y potente.
                </p>

                {/* Sección de características */}
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            icon: <FaDesktop />,
                            color: 'bg-gradient-to-br from-[#2980b9] to-[#3498db]',
                            textColor: 'text-white',
                            title: 'Sesiones Paralelas',
                            description: 'Crea y administra múltiples perfiles de Chrome de manera independiente y eficiente.'
                        },
                        {
                            icon: <FaChrome />,
                            color: 'bg-gradient-to-br from-[#34495e] to-[#2c3e50]',
                            textColor: 'text-white',
                            title: 'Perfiles Personalizados',
                            description: 'Configura cada sesión con ajustes únicos, optimizando tu experiencia de navegación.'
                        },
                        {
                            icon: <FaFolderOpen />,
                            color: 'bg-gradient-to-br from-[#16a085] to-[#2ecc71]',
                            textColor: 'text-white',
                            title: 'Gestión de Almacenamiento',
                            description: 'Visualiza y administra el espacio de tus sesiones con controles intuitivos y claros.'
                        },
                        {
                            icon: <FaCog />,
                            color: 'bg-gradient-to-br from-[#8e44ad] to-[#9b59b6]',
                            textColor: 'text-white',
                            title: 'Configuración Flexible',
                            description: 'Personaliza rutas, ajustes y preferencias para una experiencia de navegación totalmente adaptada.'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className={`${feature.color} p-6 rounded-2xl shadow-2xl flex items-center space-x-6 transition-all overflow-hidden`}
                        >
                            <div className={`text-4xl ${feature.textColor} opacity-80`}>
                                {feature.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className={`text-xl font-bold ${feature.textColor} mb-2`}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-100 text-sm opacity-90">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}