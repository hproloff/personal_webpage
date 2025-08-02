import { useTheme } from "../utils/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";

const Toggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <DarkModeSwitch
      className="ml-4"
      checked={theme === "dark"}
      sunColor="var(--text-secondary)"
      moonColor="var(--text-secondary)"
      onChange={toggleTheme}
      size={20}
    />
  );
};

export default Toggle;
