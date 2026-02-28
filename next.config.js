const nextConfig = {
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
    optimizeFonts: false,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'auto-14.ru' }],
                destination: 'https://www.auto-14.ru/:path*',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
