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
        satoshi: ["'Satoshi'", "Helvetica", "sans-serif"],
        sans: ["'Satoshi'", "Helvetica", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display': ['52px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['42px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.25', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
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
