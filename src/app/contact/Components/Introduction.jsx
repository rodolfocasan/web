// src/app/contact/Components/Introduction.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';





export default function Introduction() {
    // Configuraciones de animación refinadas
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Enlaces de contacto mejorados con un estilo más detallado
    const contactLinks = [
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            gradient: {
                bg: 'from-green-400 via-green-500 to-green-600',
                ring: 'ring-green-300/50',
                text: 'text-green-100'
            },
            link: 'https://wa.me/+50379683144'
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            gradient: {
                bg: 'from-blue-400 via-blue-500 to-blue-600',
                ring: 'ring-blue-300/50',
                text: 'text-blue-100'
            },
            link: 'https://t.me/rodolfocasan'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            gradient: {
                bg: 'from-indigo-400 via-indigo-500 to-indigo-600',
                ring: 'ring-indigo-300/50',
                text: 'text-indigo-100'
            },
            link: 'https://www.linkedin.com/in/christcastr'
        }
    ];

    return (
        <motion.section
            className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // Añadido padding-top para la barra de navegación
            style={{ paddingTop: 'calc(4rem + 20px)' }}
        >
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 bg-grid-white/5 pointer-events-none"></div>

            {/* Círculos decorativos difuminados */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* Contenedor principal de contacto personal */}
            <motion.div
                className="relative z-10 w-full max-w-xl p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl mb-8"
                variants={itemVariants}
            >
                {/* Título animado con degradado avanzado */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                    animate-gradient-x background-animate">
                    Contáctame
                </h1>

                {/* Texto sutil con legibilidad mejorada */}
                <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed 
                    tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300">
                    Puedes ponerte en contacto conmigo a través de mis canales de comunicación:
                </p>

                {/* Cuadrícula de enlaces de contacto avanzados */}
                <motion.div
                    className="grid grid-cols-3 gap-6 place-items-center"
                    variants={itemVariants}
                >
                    {contactLinks.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group relative w-20 h-20 flex items-center justify-center
                                rounded-full overflow-hidden
                                bg-gradient-to-br ${contact.gradient.bg}
                                ${contact.gradient.ring}
                                ring-4 ring-opacity-50
                                transform transition-all duration-300
                                hover:scale-110 hover:rotate-6
                                active:scale-95
                                shadow-xl hover:shadow-2xl
                            `}
                            whileHover={{ scale: 1.1, rotate: 6 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Efecto de fondo en capas */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

                            {/* Icono con efecto de desplazamiento */}
                            <contact.icon
                                size={32}
                                className={`
                                    relative z-10 
                                    ${contact.gradient.text}
                                    group-hover:scale-110 
                                    transition-transform duration-300
                                `}
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Nueva sección para contacto profesional con diseño distintivo */}
            <motion.div
                className="relative z-10 w-full max-w-xl p-8 
                    bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-orange-500/10 
                    backdrop-blur-lg rounded-3xl 
                    border-2 border-yellow-500/20 
                    shadow-2xl shadow-yellow-500/5
                    mb-8"
                variants={itemVariants}
            >
                {/* Distintivo visual para la sección profesional */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                    bg-gradient-to-r from-yellow-400 to-orange-400 
                    text-black text-sm font-bold px-4 py-1 rounded-full
                    shadow-lg">
                    Profesional
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-300 to-orange-400 mt-4">
                    Contacto Laboral
                </h2>

                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    Si estás interesado en contactarme para fines laborales, puedes encontrar más información sobre las formas de contratarme aquí:
                </p>

                {/* Botón "Ver más" con diseño distintivo */}
                <Link href="/job" passHref>
                    <motion.div
                        className="inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="
                            inline-flex items-center px-6 py-3
                            text-lg font-semibold
                            bg-gradient-to-r from-yellow-400 to-orange-500
                            hover:from-yellow-500 hover:to-orange-600
                            text-black rounded-xl
                            transform transition-all duration-300
                            shadow-lg hover:shadow-xl
                            cursor-pointer
                        ">
                            Ver más
                        </span>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.section>
    );
}