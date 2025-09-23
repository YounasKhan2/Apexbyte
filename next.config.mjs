/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  allowedDevOrigins: [
    "http://192.168.100.100:3000",
    "http://192.168.100.100:3001",
    "http://localhost:3000",
    "http://localhost:3001"
  ],
};

export default nextConfig;
