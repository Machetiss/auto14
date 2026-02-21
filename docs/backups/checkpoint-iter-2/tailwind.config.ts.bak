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
                brand: {
                    yellow: 'var(--brand-yellow)',
                    black: 'var(--brand-black)',
                },
                accent: {
                    orange: 'var(--accent-orange)', // Action / CTA
                    red: '#D32F2F',    // Urgency / Pain points
                    green: '#2E7D32',  // Trust
                },
                ui: {
                    dark: 'var(--bg-dark)',
                    light: 'var(--text-light)',
                    hover: 'var(--btn-hover)',
                    active: 'var(--btn-active)',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['var(--font-unbounded)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
