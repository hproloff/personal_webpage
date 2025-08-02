import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from '../utils/ThemeContext';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
