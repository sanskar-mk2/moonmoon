/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            custom1: ["Custom-1", "sans-serif"],
            custom2: ["Custom-2", "sans-serif"],
            custom3: ["Custom-3", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

    daisyui: {
        themes: ["retro"],
        darkTheme: "retro",
    },
};
