module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          // Background colors
          'bg-primary': 'var(--bg-primary)',
          'bg-secondary': 'var(--bg-secondary)',
          'bg-tertiary': 'var(--bg-tertiary)',
          
          // Text colors
          'text-primary': 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          'text-tertiary': 'var(--text-tertiary)',
          'text-inverse': 'var(--text-inverse)',
          
          // Interactive colors
          'interactive-primary': 'var(--interactive-primary)',
          'interactive-secondary': 'var(--interactive-secondary)',
          'interactive-hover': 'var(--interactive-hover)',
          
          // Border colors
          'border-primary': 'var(--border-primary)',
          'border-secondary': 'var(--border-secondary)',
          
          // Legacy support
          lightGray: 'var(--bg-tertiary)',
          dark: 'var(--text-primary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
