import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#F3ECDA",
                navy: "#01192B",
                teal: "#002A29",
                gold: "#BC9D6E",
                sage: "#A2B1A1",
                "soft-blue": "#D5DDE6",
            },
            borderRadius: {
                'curve': '50px',
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
