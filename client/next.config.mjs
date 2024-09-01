/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "custom-inventorymanagement.s3.ca-central-1.amazonaws",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
