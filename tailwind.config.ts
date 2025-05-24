
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
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
        // Custom colors for "Learn with" cards (theme-dependent)
        'learn-purple': { DEFAULT: 'hsl(260, 70%, 97%)', foreground: 'hsl(260, 70%, 40%)' }, 
        'dark:learn-purple': { DEFAULT: 'hsl(260, 50%, 25%)', foreground: 'hsl(260, 70%, 85%)' },

        'learn-teal': { DEFAULT: 'hsl(170, 60%, 95%)', foreground: 'hsl(170, 60%, 35%)' },
        'dark:learn-teal': { DEFAULT: 'hsl(170, 40%, 20%)', foreground: 'hsl(170, 60%, 75%)' },
        
        'learn-orange': { DEFAULT: 'hsl(30, 85%, 96%)', foreground: 'hsl(30, 85%, 45%)' },
        'dark:learn-orange': { DEFAULT: 'hsl(30, 50%, 28%)', foreground: 'hsl(30, 85%, 80%)' },

        'learn-green': { DEFAULT: 'hsl(145, 60%, 94%)', foreground: 'hsl(145, 60%, 30%)' },
        'dark:learn-green': { DEFAULT: 'hsl(145, 40%, 22%)', foreground: 'hsl(145, 60%, 70%)' },

        'learn-sky': { DEFAULT: 'hsl(190, 70%, 95%)', foreground: 'hsl(190, 70%, 40%)' },
        'dark:learn-sky': { DEFAULT: 'hsl(190, 45%, 25%)', foreground: 'hsl(190, 70%, 80%)' },

        'learn-red': { DEFAULT: 'hsl(0, 75%, 96%)', foreground: 'hsl(0, 75%, 50%)' },
        'dark:learn-red': { DEFAULT: 'hsl(0, 45%, 28%)', foreground: 'hsl(0, 75%, 85%)' },
        
        // Theme-independent colors for "Test Yourself" & "Resources & More" cards
        'test-random-bg': 'hsl(205, 80%, 65%)', 
        'test-random-fg': 'hsl(0, 0%, 100%)',
        'test-custom-bg': 'hsl(145, 65%, 55%)', 
        'test-custom-fg': 'hsl(0, 0%, 100%)',
        'test-timed-bg': 'hsl(330, 80%, 65%)',  
        'test-timed-fg': 'hsl(0, 0%, 100%)',
        'test-qbank-bg': 'hsl(240, 70%, 70%)', 
        'test-qbank-fg': 'hsl(0, 0%, 100%)',
        'test-notes-bg': 'hsl(40, 85%, 65%)',   // Gold/Ochre for Notes (from Learning Tools)
        'test-notes-fg': 'hsl(0, 0%, 100%)',
        'test-plan-bg': 'hsl(170, 70%, 45%)',    // Teal for Revision Plan
        'test-plan-fg': 'hsl(0, 0%, 100%)', 
        'test-tracking-bg': 'hsl(270, 65%, 60%)', // Purple for Performance Tracking
        'test-tracking-fg': 'hsl(0, 0%, 100%)',

        'resource-extra-bg': 'hsl(270, 75%, 65%)', // Purple (can be same as test-tracking or slightly different)
        'resource-extra-fg': 'hsl(0, 0%, 100%)',
        'resource-fun-bg': 'hsl(45, 80%, 60%)',    // Gold/Yellow
        'resource-fun-fg': 'hsl(0, 0%, 100%)',

        // Colors for Subject Note Cards (notes page - theme aware)
        'note-card-red': 'hsl(0 72% 61%)',      
        'note-card-yellow': 'hsl(54 92% 60%)',  
        'note-card-blue': 'hsl(200 82% 60%)',   
        'note-card-purple': 'hsl(260 65% 68%)', 
        'note-card-green': 'hsl(145 60% 55%)',
        'note-card-orange': 'hsl(30 90% 55%)',
        'note-card-teal': 'hsl(170 60% 48%)', 
        'note-card-gray': 'hsl(220 30% 96%)', // Light gray for summary card in light mode
        'dark:note-card-gray': 'hsl(220 10% 20%)', // Dark gray for summary card in dark mode


        // Colors for Chapter Resource Cards (notes/[subjectId]/[chapterId] page - theme aware)
        'chapter-notes-bg': 'hsl(var(--primary) / 0.9)', 
        'chapter-notes-fg': 'hsl(var(--primary-foreground))',
        'chapter-questionbank-bg': 'hsl(var(--secondary) / 0.9)', 
        'chapter-questionbank-fg': 'hsl(var(--secondary-foreground))',
        'chapter-flashcards-bg': 'hsl(var(--accent) / 0.9)', 
        'chapter-flashcards-fg': 'hsl(var(--accent-foreground))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        full: "9999px",
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
        "animatedGradientBorder": {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-border": "animatedGradientBorder 10s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config

export default config
