import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          '0%': { boxShadow: '0 0 0 0 rgba(242, 200, 20, 0.5)' },
          '70%': { boxShadow: '0 0 0 15px rgba(242, 200, 20, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(242, 200, 20, 0)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        blink: {
          '0%, 100%': { backgroundColor: '#f2c814' },  // Color original
          '50%': { backgroundColor: '#ffeb3b' },        // Color amarillo más claro
        },
        
      },
      animation: {
        'breathe-custom': 'breathe 2s ease-in-out infinite',
        'beat-custom': 'beat 2s ease-in-out infinite',
        'blink-custom': 'blink 2s ease-in-out infinite', // Animación de parpadeo
      },
    },
  },
  plugins: [],
};
export default config;
