/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./pages/**/*.html",
        "./components/**/*.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                // Minimalist black/white aesthetic with subtle accents
                primary: "#000000",
                secondary: "#ffffff",
                accent: "#333333",
                muted: "#f5f5f5",
                "gray-light": "#e0e0e0",
                "gray-medium": "#a0a0a0",
                "gray-dark": "#505050"
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'serif'],
                mono: ['Roboto Mono', 'monospace']
            },
            fontSize: {
                'hero': 'clamp(3rem, 8vw, 6rem)',
                'heading': 'clamp(2rem, 5vw, 3.5rem)',
                'subheading': 'clamp(1.5rem, 3vw, 2rem)'
            },
            spacing: {
                'section': 'clamp(4rem, 10vh, 8rem)'
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out forwards',
                'slide-up': 'slideUp 0.8s ease-in-out forwards',
                'slide-in': 'slideIn 0.8s ease-in-out forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-50px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                }
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ]
}