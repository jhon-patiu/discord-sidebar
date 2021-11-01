module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "rgbq(35 39 42)",
                secondary: "rgb(86 99 247)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
