/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        cloudflare: {
"primary": "#e0292c",
"secondary": "#333333",
"accent": "#b53807",
"neutral": "#141a24",
"base-100": "#ffffff",
"info": "#4264d7",
"success": "#175e3f",
"warning": "#f2c43a",
"error": "#f02868",
        },
      },
    ],
  },
}