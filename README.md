# Mayumi TailwindCSS Theme Plugin

一个 TailwindCSS 插件，提供 Mayumi 主题的颜色、工具类和组件样式。

## 安装

```bash
npm install mayumi-tailwindcss-theme
# 或
yarn add mayumi-tailwindcss-theme
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
    require('mayumi-tailwindcss-theme'),
  ],
}
```

### 插件选项

你可以通过选项来自定义插件行为：

```javascript
plugins: [
  require('mayumi-tailwindcss-theme')({
    includeUtilities: true,    // 是否包含工具类 (默认: true)
    includeComponents: true,   // 是否包含组件样式 (默认: true)
    includeBase: true,        // 是否包含基础样式 (默认: true)
    customColors: {           // 自定义颜色覆盖
      'mayumi-blue': 'hsl(220 100% 50%)',
    }
  }),
]
```

## 功能特性

### 颜色系统

插件提供完整的 Mayumi 颜色系统，支持亮色和暗色主题：

```html
<!-- 基础颜色 -->
<div class="bg-primary text-primary-foreground">Primary Button</div>
<div class="bg-secondary text-secondary-foreground">Secondary Button</div>

<!-- Mayumi 特有颜色 -->
<div class="bg-mayumi-blue">Mayumi Blue</div>
<div class="bg-mayumi-cyan">Mayumi Cyan</div>
<div class="border-mayumi-separator">With Separator Border</div>
```

### 工具类

#### 玻璃效果
```html
<div class="mayumi-glass">
  <!-- 毛玻璃效果背景 -->
</div>

<div class="mayumi-glass-effect">
  <!-- 另一种玻璃效果 -->
</div>
```

#### 布局工具
```html
<div class="mayumi-flex-center">
  <!-- 居中布局 -->
</div>

<div class="mayumi-text-combo">
  <!-- 文本组合样式 -->
</div>
```

### 组件样式

#### 按钮
```html
<button class="mayumi-button px-4 py-2 bg-primary text-primary-foreground rounded-md">
  Mayumi Button
</button>
```

#### 输入框
```html
<input class="mayumi-input px-3 py-2" placeholder="Enter text..." />
```

### 暗色主题

插件自动支持暗色主题，使用 `dark` 类即可切换：

```html
<html class="dark">
  <!-- 整个页面使用暗色主题 -->
</html>
```

或者局部使用：

```html
<div class="dark">
  <!-- 这个区域使用暗色主题 -->
</div>
```

## 可用颜色

### 基础颜色
- `background` / `foreground`
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `muted` / `muted-foreground`
- `accent` / `accent-foreground`
- `destructive` / `destructive-foreground`
- `success` / `success-foreground`
- `warning` / `warning-foreground`
- `card` / `card-foreground`
- `popover` / `popover-foreground`
- `border` / `input` / `ring`

### Mayumi 特有颜色
- `mayumi-blue` - Mayumi 主蓝色
- `mayumi-cyan` - Mayumi 青色
- `mayumi-control` - 控件颜色
- `mayumi-control-accent` - 控件强调色
- `mayumi-separator` - 分隔符颜色
- `mayumi-window` - 窗口背景色
- `mayumi-under-page` - 页面背景色
- `mayumi-selected` - 选中状态色
- `mayumi-keyboard-focus` - 键盘焦点色

## 扩展配置

插件还提供了额外的主题扩展：

- **字体系列**: SF Pro Text, SF Pro Icons 等 macOS 系统字体
- **间距**: 包含半步长间距 (如 `0_5`, `1_5` 等)
- **阴影**: Mayumi 风格的焦点阴影和轮廓阴影
- **动画**: 手风琴展开/收起动画
- **滚动条**: macOS 风格的自定义滚动条样式

## 示例

```html
<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mayumi Theme Example</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-background text-foreground">
  <div class="min-h-screen mayumi-flex-center">
    <div class="mayumi-glass p-8 rounded-lg max-w-md w-full space-y-4">
      <h1 class="text-2xl font-bold text-mayumi-blue">Mayumi Theme</h1>
      
      <input 
        class="mayumi-input px-3 py-2" 
        placeholder="输入内容..."
      />
      
      <button class="mayumi-button w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90">
        提交
      </button>
      
      <div class="flex space-x-2">
        <div class="w-4 h-4 bg-mayumi-blue rounded-full"></div>
        <div class="w-4 h-4 bg-mayumi-cyan rounded-full"></div>
        <div class="w-4 h-4 bg-success rounded-full"></div>
        <div class="w-4 h-4 bg-warning rounded-full"></div>
      </div>
    </div>
  </div>
</body>
</html>
```

## 许可证

MIT