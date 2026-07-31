/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        inkSoft: "#0f172d",
        graphite: "#121826",
        steel: "#5d6678",
        steelDeep: "#394355",
        mist: "#f4f7fb",
        cloud: "#fbfcfe",
        line: "#dde4ef",
        lineStrong: "#cad5e5",
        accent: "#1f4fd1",
        accentDeep: "#1539a8",
        accentSoft: "#dbe7ff"
      },
      fontFamily: {
        sans: ["'Manrope'", "'Segoe UI'", "sans-serif"],
        display: ["'Fraunces'", "'Georgia'", "serif"]
      },
      boxShadow: {
        panel: "0 28px 90px rgba(9, 15, 33, 0.1)",
        soft: "0 18px 45px rgba(9, 15, 33, 0.08)",
        float: "0 24px 65px rgba(31, 79, 209, 0.14)",
        insetLine: "inset 0 1px 0 rgba(255,255,255,0.65)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(88,97,116,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(88,97,116,0.06) 1px, transparent 1px)",
        noise:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.85) 0, rgba(255,255,255,0) 36%), radial-gradient(circle at 80% 0%, rgba(31,79,209,0.08) 0, rgba(31,79,209,0) 28%), radial-gradient(circle at 50% 100%, rgba(15,23,45,0.08) 0, rgba(15,23,45,0) 24%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.98)", opacity: "0.5" },
          "100%": { transform: "scale(1.04)", opacity: "0.15" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        glowShift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -10px, 0) scale(1.03)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 4s ease-in-out infinite alternate",
        fadeUp: "fadeUp 700ms ease forwards",
        glowShift: "glowShift 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
