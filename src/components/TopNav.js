import {
    FaMoon,
    FaSun,
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
} from "react-icons/fa";
import useDarkMode from "../useDarkMode";

import React from "react";

function TopNav() {
    return (
        <div className="top-nav">
            <span className="top-nav__left">
                <div className="flex">
                    <HashtagIcon />
                    <Title />
                </div>
            </span>
            <span className="top-nav__right">
                <ThemeIcon />
                <SearchBar />
                <Avatar />
                <BellIcon />
            </span>
        </div>
    );
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleTheme = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleTheme}>
            {darkTheme ? (
                <FaSun size="28" className="theme-icon" />
            ) : (
                <FaMoon size="28" className="theme-icon" />
            )}
        </span>
    );
};

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="search.."
            />
            <FaSearch size="16" />
        </div>
    );
};

const HashtagIcon = () => <FaHashtag size="23" className="hashtag-icon" />;
const Title = () => <h2 className="top-nav__title">tailwind-css</h2>;
const Avatar = () => <FaUserCircle size="26" className="avatar-icon" />;
const BellIcon = () => <FaRegBell size="26" className="bell-icon" />;

export default TopNav;
