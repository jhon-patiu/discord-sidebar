import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../useDarkMode";

import React from "react";

function TopNav() {
    return (
        <div className="top-nav">
            <ThemeIcon />
        </div>
    );
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleTheme = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleTheme}>
            {darkTheme ? (
                <FaSun size="24" className="theme-icon" />
            ) : (
                <FaMoon size="24" className="theme-icon" />
            )}
        </span>
    );
};

export default TopNav;
