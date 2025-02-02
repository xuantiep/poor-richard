module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      serif: "Merriweather, serif",
      sans:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
        'Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", ' +
        '"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif',
      raleway: "Raleway, Helvetica, Arial, sans-serif",
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.3rem",
      xl: "1.4rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.4rem",
      "5xl": "3rem",
      "6xl": "3.4em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      "g-1": "#fcfcfc",
      "g-2": "#fafafa",
      "g-3": "#f5f5f5",
      "g-4": "#efefef",
      "g-5": "#dbdbdb",
      "g-6": "#8a8a8a",
      "g-7": "#5d5d5d",
      "g-8": "#2d3748",
      "g-9": "#1a202c",
      beige: "#f4f1ee",
      robin: "#99d9f1",
      blue: "#009edb",
      "blue-darker": "#1982BD",
      "tw-blue": "#99d9f1",
      "fb-blue": "#009edb",
      orange: "#ff6c36",
      green: "#78bc20",
      yellow: "#ffcb05",
      "yellow-darker": "#cda52d",
      darkblue: "#22416e",
      goldenrod: "#fff1bd",
      cyan: "#e5f6ff",
    },
    extend: {
      boxShadow: {
        beige: "0 0 0 3px #f4f1ee80",
      },
      dropShadow: {
        outline: "0 1px 1px rgba(0, 0, 0, 0.5)",
      },
      lineHeight: {
        normal: "1.6",
        hed: "1.15",
      },
      margin: {
        21: "5.25rem", // for staggered sidebars
      },
      spacing: {
        "16x9": `${(100 * 9) / 16}%`,
        "6x4": `${(100 * 4) / 6}%`,
      },
      screens: {
        sm: "640px",
        md: "850px",
        lg: "1080px",
        xl: "1280px",
      },
      maxWidth: {
        content: "730px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "group-focus"],
      ringColor: ["active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: "media",
};
