/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: [
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups',
                    },
                ],
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Add fallbacks for Node.js core modules that might be imported by dependencies
            // for client-side builds where these modules are not available.
            config.resolve.fallback = {
                ...(config.resolve.fallback || {}), // Preserve existing fallbacks
                fs: false,
                tls: false,
                net: false,
                http2: false,
                dns: false,
                async_hooks: false, // Fallback for 'async_hooks'
                'node:async_hooks': false, // Explicitly handle the 'node:async_hooks' prefix
            };
        }

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
