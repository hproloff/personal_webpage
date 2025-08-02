export const colors = {
  // Background colors
  background: {
    primary: {
      light: '#E7D7B7', // Soft golden tan
      dark: '#1A202C' // Dark blueish gray
    },
    secondary: {
      light: '#FDFBF9', // Near-white parchment
      dark: '#2D3748' // Darker blueish gray
    },
    tertiary: {
      light: '#F5F1EC', // Light almond beige
      dark: '#4A5568' // Medium blueish gray
    }
  },

  // Text colors
  text: {
    primary: {
      light: '#2A2A2A', // Near-black for strong contrast
      dark: '#F7FAFC' // Very light blueish white
    },
    secondary: {
      light: '#3E3E3E', // Deep gray
      dark: '#E2E8F0' // Light blueish gray
    },
    tertiary: {
      light: '#5C5C5C', // Mid-gray for lighter content
      dark: '#A0AEC0' // Medium blueish gray
    },
    inverse: {
      light: '#FFFFFF',
      dark: '#1A202C' // Dark blueish gray
    }
  },

  // Interactive elements
  interactive: {
    primary: {
      light: '#BFA89B', // Muted clay
      dark: '#4299E1' // Bright blue
    },
    secondary: {
      light: '#CBD5D0', // Pale blue-gray
      dark: '#63B3ED' // Light blue
    },
    hover: {
      light: '#A8958A', // Darker muted clay
      dark: '#3182CE' // Darker blue
    }
  },

  // Borders
  border: {
    primary: {
      light: '#BFA89B', // Muted clay
      dark: '#4A5568' // Medium blueish gray
    },
    secondary: {
      light: '#CBD5D0', // Pale blue-gray
      dark: '#718096' // Light blueish gray
    }
  },

  // Shadows
  shadow: {
    light: 'rgba(191, 168, 155, 0.15)', // Muted clay shadow
    dark: 'rgba(66, 153, 225, 0.15)' // Blue shadow
  },

  // Links
  link: {
    primary: {
      light: '#BFA89B', // Muted clay
      dark: '#4299E1' // Bright blue
    },
    hover: {
      light: '#8E7C72', // Darker muted clay
      dark: '#3182CE' // Darker blue
    }
  }
};

// Helper function to get color based on theme
export const getColor = (colorPath: string, theme: 'light' | 'dark' = 'light') => {
  const path = colorPath.split('.');
  let current: any = colors;
  
  for (const key of path) {
    current = current[key];
  }
  
  return current[theme];
};

// CSS custom properties for easy theming
export const generateCSSVariables = (theme: 'light' | 'dark') => {
  return {
    '--bg-primary': colors.background.primary[theme],
    '--bg-secondary': colors.background.secondary[theme],
    '--bg-tertiary': colors.background.tertiary[theme],
    '--text-primary': colors.text.primary[theme],
    '--text-secondary': colors.text.secondary[theme],
    '--text-tertiary': colors.text.tertiary[theme],
    '--text-inverse': colors.text.inverse[theme],
    '--interactive-primary': colors.interactive.primary[theme],
    '--interactive-secondary': colors.interactive.secondary[theme],
    '--interactive-hover': colors.interactive.hover[theme],
    '--border-primary': colors.border.primary[theme],
    '--border-secondary': colors.border.secondary[theme],
    '--shadow': colors.shadow[theme === 'light' ? 'light' : 'dark'],
    '--link-primary': colors.link.primary[theme],
    '--link-hover': colors.link.hover[theme],
  };
}; 