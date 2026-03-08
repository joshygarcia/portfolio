/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#111111', // Deep charcoal / Matte black
                surface: '#1A1A1A', // Slightly lighter grey for cards
                surfaceHighlight: '#262626',
                primary: '#FFFFFF', // White text
                secondary: '#A1A1AA', // Grey text
                accent: '#D9F99D', // Lime green (using a tailwind default close to neon, or custom)
                neon: '#a3e635', // Lime-400 equivalent for the neon pop
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem', // ~32px
            },
            animation: {
                'loop-scroll': 'loop-scroll 25s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
