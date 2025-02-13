/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Se desactiva la optimización de imagen de NextJS
    },

    basePath: "/web",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
