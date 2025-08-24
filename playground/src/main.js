import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen mayumi-flex-center p-4">
    <div class="mayumi-glass p-8 rounded-lg max-w-2xl w-full space-y-6">
      <!-- 标题区域 -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-mayumi-blue mb-2">Mayumi Theme</h1>
        <p class="text-muted-foreground">TailwindCSS Plugin 测试页面</p>
      </div>
      
      <!-- 主题切换按钮 -->
      <div class="flex justify-center">
        <button id="themeToggle" class="mayumi-button px-6 py-3 bg-mayumi-blue text-white rounded-md hover:opacity-90 transition-opacity">
          切换到亮色主题
        </button>
      </div>
      
      <!-- 颜色测试 -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">颜色系统</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="w-full h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-medium">Primary</div>
            <div class="w-full h-16 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-medium">Secondary</div>
          </div>
          <div class="space-y-2">
            <div class="w-full h-16 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-medium">Accent</div>
            <div class="w-full h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-medium">Muted</div>
          </div>
          <div class="space-y-2">
            <div class="w-full h-16 bg-mayumi-blue rounded-lg flex items-center justify-center text-white font-medium">Mayumi Blue</div>
            <div class="w-full h-16 bg-mayumi-cyan rounded-lg flex items-center justify-center text-white font-medium">Mayumi Cyan</div>
          </div>
          <div class="space-y-2">
            <div class="w-full h-16 bg-success rounded-lg flex items-center justify-center text-success-foreground font-medium">Success</div>
            <div class="w-full h-16 bg-warning rounded-lg flex items-center justify-center text-warning-foreground font-medium">Warning</div>
          </div>
        </div>
      </div>
      
      <!-- 组件测试 -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">组件测试</h2>
        
        <!-- 输入框 -->
        <div class="space-y-3">
          <label class="block text-sm font-medium">Mayumi Input</label>
          <input class="mayumi-input px-4 py-3" placeholder="请输入内容..." />
        </div>
        
        <!-- 按钮组 -->
        <div class="flex flex-wrap gap-3">
          <button class="mayumi-button px-4 py-2 bg-primary text-primary-foreground rounded-md">Primary Button</button>
          <button class="mayumi-button px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Secondary Button</button>
          <button class="mayumi-button px-4 py-2 bg-mayumi-blue text-white rounded-md">Mayumi Button</button>
        </div>
        
        <!-- 卡片 -->
        <div class="bg-card text-card-foreground p-6 rounded-lg border border-border">
          <h3 class="text-lg font-semibold mb-3">Card Component</h3>
          <p class="text-muted-foreground mb-4">这是一个使用 Mayumi 主题的卡片组件，展示了完整的主题色彩系统。</p>
          <div class="flex space-x-2">
            <span class="px-3 py-1 bg-mayumi-blue/10 text-mayumi-blue rounded-full text-sm">Tag 1</span>
            <span class="px-3 py-1 bg-mayumi-cyan/10 text-mayumi-cyan rounded-full text-sm">Tag 2</span>
          </div>
        </div>
      </div>
      
      <!-- 状态颜色 -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">状态颜色</h2>
        <div class="space-y-3">
          <div class="p-4 bg-success/10 text-success rounded-lg border border-success/20">
            <div class="flex items-center space-x-2">
              <span class="text-lg">✅</span>
              <span class="font-medium">成功状态消息</span>
            </div>
          </div>
          <div class="p-4 bg-warning/10 text-warning rounded-lg border border-warning/20">
            <div class="flex items-center space-x-2">
              <span class="text-lg">⚠️</span>
              <span class="font-medium">警告状态消息</span>
            </div>
          </div>
          <div class="p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
            <div class="flex items-center space-x-2">
              <span class="text-lg">❌</span>
              <span class="font-medium">错误状态消息</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 工具类展示 -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">工具类展示</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-lg relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                 alt="Background" 
                 class="absolute inset-0 w-full h-full object-cover" />
            <div class="mayumi-glass-effect p-3 rounded-md relative z-10">
              <h3 class="font-medium mb-2">Glass Effect</h3>
              <p class="text-sm text-muted-foreground">毛玻璃效果背景</p>
            </div>
          </div>
          <div class="bg-mayumi-under-page border border-mayumi-separator p-4 rounded-lg">
            <h3 class="font-medium mb-2">Mayumi Colors</h3>
            <p class="text-sm text-muted-foreground">使用 Mayumi 特有颜色</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// 主题切换功能
const themeToggle = document.querySelector('#themeToggle')
const html = document.documentElement

themeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    themeToggle.textContent = '切换到暗色主题'
  } else {
    html.classList.add('dark')
    themeToggle.textContent = '切换到亮色主题'
  }
})
