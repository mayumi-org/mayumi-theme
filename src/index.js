const plugin = require('tailwindcss/plugin')

const mayumiThemePlugin = plugin.withOptions((options = {}) => {
  return function({ addUtilities, addComponents, theme, addBase }) {
    const {
      includeUtilities = true,
      includeComponents = true,
      includeBase = true,
    } = options

    // 添加基础样式和 CSS 变量
    if (includeBase) {
      addBase({
        ':root': {
          // 基础半径
          '--radius': '0.375rem',
          
          // 浅色主题
          '--background': '0 0% 100%',
          '--foreground': '0 0% 3.9%',
          '--card': '0 0% 100%',
          '--card-foreground': '0 0% 3.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '0 0% 3.9%',
          '--primary': '219 100% 53%',
          '--primary-foreground': '0 0% 98%',
          '--secondary': '0 0% 96.1%',
          '--secondary-foreground': '0 0% 9%',
          '--muted': '0 0% 96.1%',
          '--muted-foreground': '0 0% 45.1%',
          '--accent': '224 100% 52%',
          '--accent-foreground': '0 0% 9%',
          '--destructive': '359 96% 58%',
          '--destructive-foreground': '0 0% 98%',
          '--success': '123 63% 51%',
          '--success-foreground': '0 0% 98%',
          '--warning': '49 99% 53%',
          '--warning-foreground': '0 0% 9%',
          '--border': '0 0% 89.8%',
          '--input': '0 0% 89.8%',
          '--ring': '219 100% 53%',
          
          // Mayumi 特有颜色
          '--mayumi-blue': '219 100% 53%',
          '--mayumi-cyan': '202 87% 62%',
          '--mayumi-control': '0 0% 45.1%',
          '--mayumi-control-accent': '224 100% 52%',
          '--mayumi-separator': '0 0% 89.8%',
          '--mayumi-window': '0 0% 100%',
          '--mayumi-under-page': '0 0% 98%',
          '--mayumi-selected': '212 42% 33%',
          '--mayumi-keyboard-focus': '208 100% 56%',
        },
        '.dark': {
          // 深色主题
          '--background': '0 0% 15%',
          '--foreground': '0 0% 100%',
          '--card': '0 0% 12%',
          '--card-foreground': '0 0% 87%',
          '--popover': '0 0% 11%',
          '--popover-foreground': '0 0% 87%',
          '--primary': '219 100% 53%',
          '--primary-foreground': '0 0% 100%',
          '--secondary': '0 0% 33%',
          '--secondary-foreground': '0 0% 87%',
          '--muted': '0 0% 20%',
          '--muted-foreground': '0 0% 60%',
          '--accent': '224 100% 52%',
          '--accent-foreground': '0 0% 100%',
          '--destructive': '359 96% 58%',
          '--destructive-foreground': '0 0% 100%',
          '--success': '123 63% 51%',
          '--success-foreground': '0 0% 100%',
          '--warning': '49 99% 53%',
          '--warning-foreground': '0 0% 9%',
          '--border': '0 0% 20%',
          '--input': '0 0% 20%',
          '--ring': '208 100% 56%',
          
          // Mayumi 特有颜色 - 深色主题
          '--mayumi-blue': '219 100% 53%',
          '--mayumi-cyan': '202 87% 62%',
          '--mayumi-control': '0 0% 33%',
          '--mayumi-control-accent': '224 100% 52%',
          '--mayumi-separator': '0 0% 20%',
          '--mayumi-window': '0 0% 15%',
          '--mayumi-under-page': '0 0% 12%',
          '--mayumi-selected': '212 42% 33%',
          '--mayumi-keyboard-focus': '208 100% 56%',
        },
        '*': {
          '@apply border-border': {},
        },
        'body': {
          '@apply bg-background text-foreground': {},
          'font-feature-settings': '"rlig" 1, "calt" 1',
          'font-family': '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        },
        // 自定义滚动条
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: 'hsl(var(--mayumi-separator))',
          'border-radius': '4px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'hsl(var(--mayumi-control))',
          'border-radius': '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'hsl(var(--muted-foreground))',
        },
        '*': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'hsl(var(--mayumi-control)) hsl(var(--mayumi-separator))',
        },
      })
    }

    // 添加 Mayumi 自定义工具类
    if (includeUtilities) {
      addUtilities({
        '.mayumi-glass': {
          backgroundColor: 'hsl(var(--mayumi-under-page) / 0.85)',
          backdropFilter: 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
      })
    }

    // 添加 Mayumi 组件样式
    if (includeComponents) {
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
            boxShadow: theme('boxShadow.mayumi-focus') || '0px 0px 0px 4px hsl(var(--mayumi-keyboard-focus) / 0.3)',
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
            boxShadow: theme('boxShadow.mayumi-focus') || '0px 0px 0px 4px hsl(var(--mayumi-keyboard-focus) / 0.3)',
          },
        },
      })
    }
  }
}, () => ({
  theme: {
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
    },
  },
}))

module.exports = mayumiThemePlugin