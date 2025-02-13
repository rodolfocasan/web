// src/app/projects/python/flask-rm/Components/Download.jsx
"use client";
import React, { useState, useEffect } from 'react';
import {
    FaWindows,
    FaApple,
    FaLinux,
    FaDownload,
    FaGithub,
    FaSpinner,
    FaPython,
    FaCode,
    FaTerminal,
    FaCopy,
    FaCheck
} from 'react-icons/fa';





export default function Download() {
    // Estados para manejar la información del repositorio
    const [repoInfo, setRepoInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Estado para manejar los comandos copiados
    const [copiedStates, setCopiedStates] = useState({});

    // Configuración del repositorio de GitHub
    const GITHUB_REPOSITORY = 'rodolfocasan/flask-resources-monitor';
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPOSITORY}`;

    // Mapeo de iconos para sistemas operativos
    const osIcons = {
        windows: <FaWindows className="text-[#4A90E2]" />,
        mac: <FaApple className="text-[#A2AAAD]" />,
        linux: <FaLinux className="text-[#FFA500]" />
    };

    // Comando de clonación de repositorio
    const cloneCommand = `git clone https://github.com/${GITHUB_REPOSITORY}.git`;

    // Comandos de instalación por sistema operativo
    const installCommands = {
        windows: [
            cloneCommand,
            'cd flask-resources-monitor',
            'python -m venv venv',
            'venv\\Scripts\\activate',
            'pip install -r DOCs\\requirements.txt',
            'python main.py'
        ],
        mac: [
            cloneCommand,
            'cd flask-resources-monitor',
            'python3 -m venv venv',
            'source venv/bin/activate',
            'pip install -r DOCs/requirements.txt',
            'python main.py'
        ],
        linux: [
            cloneCommand,
            'cd flask-resources-monitor',
            'python3 -m venv venv',
            'source venv/bin/activate',
            'pip install -r DOCs/requirements.txt',
            'python main.py'
        ]
    };

    // Función para copiar al portapapeles
    const copyToClipboard = async (text, commandId) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates(prev => ({ ...prev, [commandId]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [commandId]: false }));
            }, 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    useEffect(() => {
        const fetchRepoInfo = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);
                if (!response.ok) throw new Error('No se pudo obtener la información del repositorio');

                const data = await response.json();
                setRepoInfo({
                    stars: data.stargazers_count,
                    lastUpdate: new Date(data.updated_at).toLocaleDateString('es-ES'),
                    description: data.description
                });
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepoInfo();
    }, []);

    // Estado de carga
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 flex items-center justify-center">
                <div className="animate-spin">
                    <FaSpinner className="text-5xl text-white" />
                </div>
            </div>
        );
    }

    // Estado de error
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white flex items-center justify-center p-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Error al Obtener Información</h2>
                    <p className="text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                    Obtener Flask Resources Monitor
                </h1>

                {/* Información del Repositorio */}
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaPython className="text-emerald-400" />
                            Versión Actual
                        </h2>
                        <span className="text-gray-400">Última actualización: {repoInfo?.lastUpdate}</span>
                    </div>

                    {/* Requisitos */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2 text-emerald-400">Requisitos</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li className="flex items-center gap-2">
                                <FaPython />
                                Python 3.8 o superior
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCode />
                                Dependencias (instaladas vía pip)
                            </li>
                        </ul>
                    </div>

                    {/* Instrucciones de Instalación por SO */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(installCommands).map(([os, commands]) => (
                            <div
                                key={os}
                                className={`
                                    p-6 rounded-xl 
                                    ${os === 'windows' ? 'bg-blue-600/20 border border-blue-700/30' :
                                        os === 'mac' ? 'bg-gray-600/20 border border-gray-700/30' :
                                            'bg-orange-600/20 border border-orange-700/30'}
                                `}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {osIcons[os]}
                                    <span className="font-medium capitalize">
                                        {os === 'windows' ? 'Windows' :
                                            os === 'mac' ? 'macOS' : 'Linux'}
                                    </span>
                                </div>
                                <div className="bg-black/30 rounded p-3 text-sm space-y-3">
                                    {commands.map((cmd, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors"
                                        >
                                            <FaTerminal className="text-emerald-400 flex-shrink-0" />
                                            <code className="text-gray-300 break-all flex-grow">{cmd}</code>
                                            <button
                                                onClick={() => copyToClipboard(cmd, `${os}-${index}`)}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                title="Copiar comando"
                                            >
                                                {copiedStates[`${os}-${index}`] ? (
                                                    <FaCheck className="text-emerald-400" />
                                                ) : (
                                                    <FaCopy className="text-gray-400 hover:text-white" />
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón de GitHub */}
                <div className="text-center mt-12">
                    <a
                        href={`https://github.com/${GITHUB_REPOSITORY}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 
                        bg-gradient-to-r from-emerald-600 to-emerald-800 
                        text-white px-6 py-3 rounded-full 
                        hover:from-emerald-500 hover:to-emerald-700 
                        transition-all duration-300 
                        hover:scale-105"
                    >
                        <FaGithub />
                        <span>Ver en GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}