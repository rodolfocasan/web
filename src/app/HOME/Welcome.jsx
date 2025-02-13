// src/app/HOME/Welcome.jsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import Data from "../constants.json";





const Welcome = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Variantes para las animaciones del contenedor
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    // Variantes para las animaciones de los elementos individuales
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            // Añadido pt-16 para mobile y pt-20 para desktop para evitar superposición con la navbar
            className="min-h-screen pt-20 md:pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-4 md:p-8"
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-4xl w-full space-y-8 text-center">
                {/* Imagen de Perfil */}
                <motion.div
                    className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-6 shadow-2xl rounded-full overflow-hidden border-4 border-blue-500/50"
                    variants={itemVariants}
                >
                    <Image
                        src={Data.favicon}
                        alt="Rodolfo Casan Profile"
                        fill
                        className="object-cover"
                        onLoad={() => setImageLoaded(true)}
                        priority
                        unoptimized
                    />
                </motion.div>

                {/* Nombre */}
                <motion.h1
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
                    variants={itemVariants}
                >
                    Rodolfo Casan
                </motion.h1>

                {/* Título Profesional */}
                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-gray-200 tracking-wide"
                    variants={itemVariants}
                >
                    Ingeniero de Software, científico y matemático autodidacta
                </motion.h2>

                {/* Descripción Personal */}
                <motion.div
                    className="text-base md:text-lg text-gray-300 leading-relaxed px-4 md:px-12 max-w-3xl mx-auto"
                    variants={itemVariants}
                >
                    <p>
                        Con años de experiencia en trabajos freelance, me he consolidado como un profesional versátil y apasionado por la tecnología. Mi trayectoria abarca múltiples dominios tecnológicos, desde el desarrollo web y móvil hasta soluciones de software personalizadas. Me destaco por mi capacidad de aprendizaje rápido, resolución creativa de problemas y compromiso continuo con la excelencia técnica.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Welcome;