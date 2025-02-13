// src/app/job/Components/Introduction.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MdAccessTime, MdAttachMoney, MdCalendarMonth } from 'react-icons/md';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';





export default function Introduction() {
    // Configuración de la animación para los contenedores
    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3
            }
        }
    };

    // Configuración de la animación para los elementos individuales
    const itemAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    // Array de objetos con la información de las modalidades de pago
    const paymentOptions = [
        {
            title: "Pago por hora",
            subtitle: "Time & Materials",
            description: "Te cobro por cada hora que trabajo en tu proyecto. Así pagas solo por lo que realmente necesitas, y si algo cambia o surge algo nuevo, seguimos trabajando sin complicaciones.",
            benefits: [
                "Puedes cambiar cosas sobre la marcha",
                "Pagas solo por el tiempo que uso"
            ],
            icon: <MdAccessTime className="w-8 h-8" />,
            gradient: "from-blue-500 via-blue-600 to-blue-700"
        },
        {
            title: "Pago por proyecto completo",
            subtitle: "Fixed Price",
            description: "Nos ponemos de acuerdo en un precio fijo desde el inicio, y ese es el monto que pagas al final, sin sorpresas. Es perfecto si ya sabes exactamente qué quieres.",
            benefits: [
                "Sabes cuánto vas a pagar desde el principio",
                "No te preocupas por cambios de última hora en el costo"
            ],
            icon: <MdAttachMoney className="w-8 h-8" />,
            gradient: "from-purple-500 via-purple-600 to-purple-700"
        },
        {
            title: "Pago mensual",
            subtitle: "Retainer o Suscripción",
            description: "Me pagas un monto fijo cada mes para que esté disponible cuando me necesites. Esto es ideal si quieres tenerme a mano para arreglar cosas, hacer actualizaciones o resolver problemas rápidamente.",
            benefits: [
                "Tienes acceso garantizado a mí cuando me necesites",
                "Más barato que contratar a alguien a tiempo completo"
            ],
            icon: <MdCalendarMonth className="w-8 h-8" />,
            gradient: "from-emerald-500 via-emerald-600 to-emerald-700"
        }
    ];

    // Array de enlaces de contacto con sus configuraciones
    const contactLinks = [
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            gradient: {
                bg: 'from-green-400 via-green-500 to-green-600',
                ring: 'ring-green-300/50',
                text: 'text-green-100',
                hover: 'hover:shadow-green-500/25'
            },
            link: 'https://wa.me/+50379683144'
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            gradient: {
                bg: 'from-blue-400 via-blue-500 to-blue-600',
                ring: 'ring-blue-300/50',
                text: 'text-blue-100',
                hover: 'hover:shadow-blue-500/25'
            },
            link: 'https://t.me/rodolfocasan'
        }
    ];

    return (
        <section className="relative pt-24 md:pt-32 min-h-screen bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
            </div>

            {/* Contenedor principal con z-index para estar por encima del fondo */}
            <div className="relative z-10">
                {/* Sección de título principal */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Modalidades de Trabajo
                    </motion.h1>
                    <motion.p
                        className="text-gray-400 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elige la forma de trabajo que mejor se adapte a tus necesidades y objetivos
                    </motion.p>
                </div>

                {/* Contenedor de las tarjetas */}
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24"
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Mapeo de las opciones de pago */}
                    {paymentOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnimation}
                            className="group relative"
                        >
                            {/* Efecto de brillo en hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Tarjeta principal */}
                            <div className="relative bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                {/* Cabecera de la tarjeta */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-3 rounded-lg text-white bg-gradient-to-br ${option.gradient} shadow-lg`}>
                                        {option.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {option.title}
                                        </h3>
                                        <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            {option.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    {option.description}
                                </p>

                                {/* Lista de beneficios */}
                                <div className="mt-auto space-y-4">
                                    <h4 className="text-white font-semibold text-lg mb-3">
                                        Beneficios:
                                    </h4>
                                    {option.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${option.gradient}`} />
                                            <p className="text-gray-300">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Nueva sección de contacto mejorada */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {/* Contenedor del título con diseño mejorado */}
                    <div className="text-center mb-12 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
                        </div>
                        <h2 className="relative inline-block px-8 py-4 bg-gray-900 text-3xl md:text-4xl font-bold">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                ¿Listo para comenzar?
                            </span>
                        </h2>
                        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Elige la modalidad que mejor se adapte a tu proyecto y contáctame directamente para discutir los detalles
                        </p>
                    </div>

                    {/* Contenedor de enlaces de contacto mejorado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {contactLinks.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        group relative p-8
                                        bg-gradient-to-br ${contact.gradient.bg}
                                        rounded-xl
                                        ring-1 ${contact.gradient.ring}
                                        shadow-lg ${contact.gradient.hover}
                                        hover:shadow-xl hover:-translate-y-1
                                        transition-all duration-300
                                        flex items-center justify-center gap-4
                                    `}
                                    variants={itemAnimation}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                    <div className="flex flex-col items-start">
                                        <span className={`text-xl font-bold ${contact.gradient.text}`}>
                                            {contact.name}
                                        </span>
                                        <span className="text-sm text-white/80">
                                            Conversemos sobre tu proyecto
                                        </span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}