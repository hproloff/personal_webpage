import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
