# Mayumi TailwindCSS Theme Plugin

一个 TailwindCSS 插件，提供 Mayumi 主题的颜色、工具类和组件样式。

## 安装

```bash
npm install @mayumi-org/mayumi-theme
# 或
yarn add @mayumi-org/mayumi-theme
```

## 使用方法

在你的 `tailwind.config.js` 文件中添加插件：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 你的内容路径
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 其他自定义配置
    },
  },
  plugins: [
    require('@mayumi-org/mayumi-theme'),
  ],
}
```

### 插件选项

你可以通过选项来自定义插件行为：

```javascript
plugins: [
  require('@mayumi-org/mayumi-theme')({
    includeUtilities: true,    // 是否包含工具类 (默认: true)
    includeComponents: true,   // 是否包含组件样式 (默认: true)
    includeBase: true,        // 是否包含基础样式 (默认: true)
  }),
]
```
