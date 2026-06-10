const nextConfig = {
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
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
            {
                source: '/uslugi',
                destination: '/',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'self' *.yandex.ru *.yandex.com *.yandex.by *.yandex.com.tr *.webvisor.com; object-src 'none'; base-uri 'none';"
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups'
                    }
                ]
            }
        ];
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
