// src/app/projects/python/chrome-session-manager/Components/Download.jsx
"use client";
import React, { useState, useEffect } from 'react';
import {
    FaWindows,
    FaApple,
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
    const GITHUB_REPOSITORY = 'rodolfocasan/chrome-session-manager';
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPOSITORY}/releases`;

    // Mapeo de iconos para sistemas operativos
    const osIcons = {
        windows: <FaWindows className="text-[#4A90E2]" />,
        mac: <FaApple className="text-[#A2AAAD]" />,
        linux: <FaLinux className="text-[#FFA500]" />
    };

    // Detectar tipo de descarga según el nombre del archivo
    const detectDownloadType = (fileName) => {
        const fileNameLower = fileName.toLowerCase();
        if (fileNameLower.includes('windows') || fileNameLower.endsWith('.exe')) return 'windows';
        if (fileNameLower.includes('mac') || fileNameLower.includes('darwin') || fileNameLower.endsWith('.dmg')) return 'mac';
        if (fileNameLower.includes('linux') || fileNameLower.endsWith('.AppImage') || fileNameLower.endsWith('.deb')) return 'linux';
        return null;
    };

    useEffect(() => {
        const fetchVersions = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);
                if (!response.ok) throw new Error('No se pudieron obtener las versiones');

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
            <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#333333] flex items-center justify-center">
                <div className="animate-spin">
                    <FaSpinner className="text-5xl text-white" />
                </div>
            </div>
        );
    }

    // Estado de error
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#333333] text-white flex items-center justify-center p-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Error al Obtener Versiones</h2>
                    <p className="text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#333333] text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                    Descargar gratuitamente
                </h1>

                {versions.map((version, index) => (
                    <div
                        key={index}
                        className="bg-[#1e1e1e] rounded-2xl shadow-2xl p-6 mb-8 hover:scale-[1.02] transition-transform"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Versión {version.version}</h2>
                            <span className="text-gray-400">Publicado {version.publishedOn}</span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {version.files.map((file, fileIndex) => (
                                <a
                                    key={fileIndex}
                                    href={file.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        flex items-center justify-between p-4 rounded-xl 
                                        transition-all duration-300 
                                        hover:scale-[1.05] active:scale-[0.95]
                                        ${file.type === 'windows' ? 'bg-blue-600/20 hover:bg-blue-600/40 border border-blue-700/30' :
                                            file.type === 'mac' ? 'bg-gray-600/20 hover:bg-gray-600/40 border border-gray-700/30' :
                                                'bg-orange-600/20 hover:bg-orange-600/40 border border-orange-700/30'}
                                    `}
                                >
                                    <div className="flex items-center space-x-4">
                                        {osIcons[file.type]}
                                        <span className="font-medium capitalize">
                                            {file.type === 'windows' ? 'Windows' :
                                                file.type === 'mac' ? 'Mac' :
                                                    'Linux'}
                                        </span>
                                    </div>
                                    <FaDownload className="text-white opacity-70" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center mt-12">
                    <a
                        href={`https://github.com/${GITHUB_REPOSITORY}/releases`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 
                        bg-gradient-to-r from-[#4A4A4A] to-[#2C2C2C] 
                        text-white px-6 py-3 rounded-full 
                        hover:from-[#5A5A5A] hover:to-[#3C3C3C] 
                        transition-all duration-300 
                        hover:scale-105"
                    >
                        <FaGithub />
                        <span>Ver Todas las Versiones</span>
                    </a>
                </div>
            </div>
        </div>
    );
}