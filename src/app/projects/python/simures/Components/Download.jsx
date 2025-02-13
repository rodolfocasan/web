// src/app/projects/python/simures/Components/Download.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaLinux,
    FaDownload,
    FaGithub,
    FaSpinner
} from 'react-icons/fa';





export default function Download() {
    // Estados para manejar la información de las versiones
    const [versions, setVersions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Configuración del repositorio de GitHub
    const GITHUB_REPOSITORY = 'rodolfocasan/simures';
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPOSITORY}/releases`;

    // Detectar tipo de descarga según el nombre del archivo
    const detectDownloadType = (fileName) => {
        const fileNameLower = fileName.toLowerCase();
        // En este caso, solo nos interesan los archivos Linux
        if (fileNameLower.includes('linux') || fileNameLower.endsWith('.AppImage') || fileNameLower.endsWith('.deb')) return 'linux';
        return null;
    };

    useEffect(() => {
        const fetchVersions = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);
                if (!response.ok) throw new Error('No se pudieron obtener las versiones de SimuRES');

                const data = await response.json();

                // Filtrar solo versiones estables (sin prerelease o draft)
                const stableVersions = data.filter(version =>
                    !version.prerelease && !version.draft
                ).map(version => ({
                    version: version.tag_name,
                    publishedOn: new Date(version.published_at).toLocaleDateString('es-ES'),
                    files: version.assets.map(file => ({
                        name: file.name,
                        downloadUrl: file.browser_download_url,
                        type: detectDownloadType(file.name)
                    })).filter(file => file.type !== null)
                }));

                setVersions(stableVersions);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVersions();
    }, []);

    // Estado de carga
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 1, 
                        ease: "linear" 
                    }}
                >
                    <FaSpinner className="text-5xl text-white" />
                </motion.div>
            </div>
        );
    }

    // Estado de error
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Error al Obtener Versiones</h2>
                    <p className="text-gray-400">{error}</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Descargar SimuRES
                </motion.h1>

                {versions.map((version, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-gray-800 bg-opacity-50 rounded-2xl shadow-2xl p-6 mb-8 hover:scale-[1.02] transition-transform"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-blue-400">Versión {version.version}</h2>
                            <span className="text-gray-400">Publicado {version.publishedOn}</span>
                        </div>

                        <div className="grid md:grid-cols-1 gap-4">
                            {version.files.map((file, fileIndex) => (
                                <a
                                    key={fileIndex}
                                    href={file.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center justify-between p-4 rounded-xl 
                                        transition-all duration-300 
                                        hover:scale-[1.05] active:scale-[0.95]
                                        bg-purple-600/20 hover:bg-purple-600/40 
                                        border border-purple-700/30
                                    "
                                >
                                    <div className="flex items-center space-x-4">
                                        <FaLinux className="text-purple-400" />
                                        <span className="font-medium">Linux</span>
                                    </div>
                                    <FaDownload className="text-white opacity-70" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="text-center mt-12">
                    <motion.a
                        href={`https://github.com/${GITHUB_REPOSITORY}/releases`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 
                        bg-gradient-to-r from-gray-700 to-gray-900 
                        text-white px-6 py-3 rounded-full 
                        hover:from-gray-600 hover:to-gray-800 
                        transition-all duration-300 
                        hover:scale-105"
                    >
                        <FaGithub />
                        <span>Ver Todas las Versiones</span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}