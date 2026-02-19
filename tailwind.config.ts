import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a', // Yellow-200
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b', // Base Orange-Yellow
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                brand: {
                    yellow: '#FFF500',
                    black: '#000000',
                },
                accent: {
                    orange: '#FF4500', // Action / CTA
                    red: '#D32F2F',    // Urgency / Pain points
                    green: '#2E7D32',  // Trust
                }
            },
            fontFamily: {
                sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'spin-slow-custom': 'spin 8s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
