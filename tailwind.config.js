/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
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
          success: {
            DEFAULT: "hsl(var(--success))",
            foreground: "hsl(var(--success-foreground))",
          },
          warning: {
            DEFAULT: "hsl(var(--warning))",
            foreground: "hsl(var(--warning-foreground))",
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
          // Mayumi 特有的颜色扩展
          "mayumi-blue": "hsl(var(--mayumi-blue))",
          "mayumi-cyan": "hsl(var(--mayumi-cyan))",
          "mayumi-control": "hsl(var(--mayumi-control))",
          "mayumi-control-accent": "hsl(var(--mayumi-control-accent))",
          "mayumi-separator": "hsl(var(--mayumi-separator))",
          "mayumi-window": "hsl(var(--mayumi-window))",
          "mayumi-under-page": "hsl(var(--mayumi-under-page))",
          "mayumi-selected": "hsl(var(--mayumi-selected))",
          "mayumi-keyboard-focus": "hsl(var(--mayumi-keyboard-focus))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: [
            "SF Pro Text",
            "SF Pro Icons", 
            "Helvetica Neue",
            "Helvetica",
            "Arial",
            "sans-serif"
          ],
          mono: [
            "SFMono-Regular",
            "Menlo", 
            "Monaco",
            "Consolas",
            "Liberation Mono",
            "Courier New",
            "monospace"
          ],
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '3.75rem',
          '7xl': '4.5rem',
          '8xl': '6rem',
          '9xl': '8rem',
        },
        spacing: {
          '0_5': '0.125rem',
          '1_5': '0.375rem',
          '2_5': '0.625rem',
          '3_5': '0.875rem',
          '4_5': '1.125rem',
          '5_5': '1.375rem',
        },
        boxShadow: {
          'mayumi-focus': '0px 0px 0px 4px hsl(var(--mayumi-keyboard-focus) / 0.3)',
          'mayumi-outline': '0px 0px 0px 1px hsl(var(--mayumi-separator))',
        },
        backdropBlur: {
          'mayumi': '8px',
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
      function({ addUtilities, addComponents, theme }) {
        // Mayumi 自定义工具类
        addUtilities({
          '.mayumi-glass': {
            backgroundColor: 'hsl(var(--mayumi-under-page) / 0.85)',
            backdropFilter: 'blur(8px)',
            '-webkit-backdrop-filter': 'blur(8px)',
          },
          '.mayumi-flex-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.mayumi-text-combo': {
            fontSize: 'var(--font-size)',
            lineHeight: 'var(--font-size)',
          },
        })
        
        // Mayumi 组件样式
        addComponents({
          '.mayumi-button': {
            cursor: 'pointer',
            border: 'none',
            textAlign: 'center',
            appearance: 'none',
            fontFamily: theme('fontFamily.sans'),
            fontWeight: '400',
            transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:focus': {
              outline: 'none',
              boxShadow: theme('boxShadow.mayumi-focus'),
            },
            '&:disabled': {
              cursor: 'not-allowed',
              opacity: '0.5',
            },
          },
          '.mayumi-input': {
            position: 'relative',
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: theme('borderRadius.md'),
            border: '1px solid hsl(var(--border))',
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            fontSize: theme('fontSize.sm'),
            transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:focus-within': {
              borderColor: 'transparent',
              boxShadow: theme('boxShadow.mayumi-focus'),
            },
          },
        })
      },
    ],
  }