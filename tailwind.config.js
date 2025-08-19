/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // se não usar /app, tudo bem manter
  ],
  theme: {
    extend: {
      colors: {
        /* Paleta refinada */
        primary: "#10B981", // Emerald (verde Tiffany, suave e premium)
        secondary: "#0B1625", // Fundo de cards (azul-escuro profundo)
        dark: "#0f172a", // Fundo geral da página
        accent: "#06D6A0", // Verde vibrante para CTAs especiais
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        montserrat: [
          "Montserrat",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        // sombras úteis para “neon”
        "emerald-soft": "0 0 25px rgba(16,185,129,0.45)",
        "emerald-strong": "0 0 40px rgba(16,185,129,0.8)",
      },
      dropShadow: {
        emerald: "0 0 40px #10B981",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        floaty: "floaty 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
