module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        federiconigrowixstudiocomblack: "var(--federiconigrowixstudiocomblack)",
        "federiconigrowixstudiocomblack-30":
          "var(--federiconigrowixstudiocomblack-30)",
        federiconigrowixstudiocomblue: "var(--federiconigrowixstudiocomblue)",
        "federiconigrowixstudiocomblue-ribbon":
          "var(--federiconigrowixstudiocomblue-ribbon)",
        federiconigrowixstudiocomboulder:
          "var(--federiconigrowixstudiocomboulder)",
        federiconigrowixstudiocomcasablanca:
          "var(--federiconigrowixstudiocomcasablanca)",
        "federiconigrowixstudiocomcasablanca-70":
          "var(--federiconigrowixstudiocomcasablanca-70)",
        "federiconigrowixstudiocomcod-gray":
          "var(--federiconigrowixstudiocomcod-gray)",
        federiconigrowixstudiocomgallery:
          "var(--federiconigrowixstudiocomgallery)",
        federiconigrowixstudiocomgigas: "var(--federiconigrowixstudiocomgigas)",
        federiconigrowixstudiocomindigo:
          "var(--federiconigrowixstudiocomindigo)",
        federiconigrowixstudiocomkillarney:
          "var(--federiconigrowixstudiocomkillarney)",
        federiconigrowixstudiocommercury:
          "var(--federiconigrowixstudiocommercury)",
        federiconigrowixstudiocommillbrook:
          "var(--federiconigrowixstudiocommillbrook)",
        "federiconigrowixstudiocommountain-meadow":
          "var(--federiconigrowixstudiocommountain-meadow)",
        "federiconigrowixstudiocomradical-red":
          "var(--federiconigrowixstudiocomradical-red)",
        federiconigrowixstudiocomshark: "var(--federiconigrowixstudiocomshark)",
        federiconigrowixstudiocomsilver:
          "var(--federiconigrowixstudiocomsilver)",
        federiconigrowixstudiocomtundora:
          "var(--federiconigrowixstudiocomtundora)",
        federiconigrowixstudiocomwhite: "var(--federiconigrowixstudiocomwhite)",
        "federiconigrowixstudiocomwild-sand":
          "var(--federiconigrowixstudiocomwild-sand)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "federiconigro-wixstudio-com-font-awesome-5-brands-regular":
          "var(--federiconigro-wixstudio-com-font-awesome-5-brands-regular-font-family)",
        "federiconigro-wixstudio-com-roboto-medium":
          "var(--federiconigro-wixstudio-com-roboto-medium-font-family)",
        "federiconigro-wixstudio-com-roboto-regular":
          "var(--federiconigro-wixstudio-com-roboto-regular-font-family)",
        "federiconigro-wixstudio-com-satoshi-medium":
          "var(--federiconigro-wixstudio-com-satoshi-medium-font-family)",
        "federiconigro-wixstudio-com-satoshi-regular":
          "var(--federiconigro-wixstudio-com-satoshi-regular-font-family)",
        "federiconigro-wixstudio-com-semantic-button":
          "var(--federiconigro-wixstudio-com-semantic-button-font-family)",
        "federiconigro-wixstudio-com-semantic-heading-1":
          "var(--federiconigro-wixstudio-com-semantic-heading-1-font-family)",
        "federiconigro-wixstudio-com-semantic-heading-2":
          "var(--federiconigro-wixstudio-com-semantic-heading-2-font-family)",
        "federiconigro-wixstudio-com-semantic-heading-3":
          "var(--federiconigro-wixstudio-com-semantic-heading-3-font-family)",
        "federiconigro-wixstudio-com-semantic-input":
          "var(--federiconigro-wixstudio-com-semantic-input-font-family)",
        "federiconigro-wixstudio-com-semantic-label":
          "var(--federiconigro-wixstudio-com-semantic-label-font-family)",
        "federiconigro-wixstudio-com-semantic-link":
          "var(--federiconigro-wixstudio-com-semantic-link-font-family)",
        "federiconigro-wixstudio-com-semantic-textarea":
          "var(--federiconigro-wixstudio-com-semantic-textarea-font-family)",
        "federiconigro-wixstudio-com-switzer-regular":
          "var(--federiconigro-wixstudio-com-switzer-regular-font-family)",
        "federiconigro-wixstudio-com-switzer-variable-regular":
          "var(--federiconigro-wixstudio-com-switzer-variable-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
