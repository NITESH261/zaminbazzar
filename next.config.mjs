/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.dicebear.com",
            },
            {
                protocol: "https",
                hostname: "zaminwale-private.s3.ap-south-1.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "zaminwale-api.onrender.com"
            }
        ]
    }
};

export default nextConfig;


