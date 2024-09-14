const { Variable } = require('lucide-react');
const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      inter:['var(--font-inter)']
     },
     colors:{
      background:'rgb(var(--background))',
      foreground:'rgb(var(--foreground))',
      muted: 'rgb(var(--muted))',
      accent:'rgb(var(--accent))',
      // 'galactic-blue': '#1E3A8A',
      //   'stardust-silver': '#C0C0C0',
     },
     backgroundImage:{
      // 'firefly-radial' : 'radial-gradient(50% 50% at 50% 50% , rgba(255 80 0.5 0) 0%, rgba(217,217,217,0) ,100%)'
      'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 80, 0, 0.5) 0%, rgba(217, 217, 217, 0) 100%)',
     },
     boxShadow:{
      'glass-inset':'inset 0 17px 5px -9px rgba(254,254,91,0.05)',
      'glass-sm':'5px 0px 0px 10px rgba(255, 215, 0, 0.1) ',
     },
     keyframes:{
      'spin-reverse':{
      '0%': {transform: 'Rotate(0deg)'},
      '100%': {transform: 'Rotate(-360deg)'}
    }
      },
     animation:{
      'spin-slow':'spin 40s linear infinite',
      'spin-slow-reverse':'spin-reverse 40s linear infinite',

     },

     screens:{
      xs:'480px'
     },

    },
  },
  plugins: [],
};
