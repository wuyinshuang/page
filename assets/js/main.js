// 主题切换
function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle-btn');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  // 设置初始主题
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // 切换主题
  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 添加切换动画
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  });
}

// 移动端菜单切换
function initMobileMenu() {
  const menuToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const hamburger = document.querySelector('.hamburger');
  
  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navbarMenu?.classList.toggle('active');
    
    // 汉堡菜单动画
    if (hamburger) {
      if (!isExpanded) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.backgroundColor = 'var(--primary)';
        hamburger.before.style.transform = 'rotate(-45deg) translate(-6px, 6px)';
        hamburger.after.style.transform = 'rotate(-45deg) translate(-6px, -6px)';
      } else {
        hamburger.style.transform = 'rotate(0)';
        hamburger.style.backgroundColor = '';
        hamburger.before.style.transform = '';
        hamburger.after.style.transform = '';
      }
    }
  });
  
  // 点击外部关闭菜单
  document.addEventListener('click', (e) => {
    if (!navbarMenu?.contains(e.target) && !menuToggle?.contains(e.target)) {
      menuToggle?.setAttribute('aria-expanded', 'false');
      navbarMenu?.classList.remove('active');
    }
  });
}

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // 移动端点击后关闭菜单
        if (window.innerWidth <= 768) {
          const menuToggle = document.querySelector('.navbar-toggle');
          const navbarMenu = document.querySelector('.navbar-menu');
          menuToggle?.setAttribute('aria-expanded', 'false');
          navbarMenu?.classList.remove('active');
        }
      }
    });
  });
}

// 代码高亮
function initCodeHighlight() {
  // 如果有代码块，可以在这里添加代码高亮逻辑
  // 可以集成 Prism.js 或 Highlight.js
  const codeBlocks = document.querySelectorAll('pre code');
  if (codeBlocks.length > 0) {
    // 延迟加载代码高亮库
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    script.onload = () => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
      document.head.appendChild(style);
    };
    document.head.appendChild(script);
  }
}

// 图片懒加载
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 复制代码按钮
function initCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.title = '复制代码';
    button.ariaLabel = '复制代码';
    
    button.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.textContent || '';
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = 'var(--success)';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
          button.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
    
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
}

// 表格响应式
function initResponsiveTables() {
  document.querySelectorAll('.post-content table').forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    wrapper.style.overflowX = 'auto';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// 页面加载进度条
function initProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.width = '0%';
  progressBar.style.height = '3px';
  progressBar.style.backgroundColor = 'var(--primary)';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'width 0.3s';
  document.body.appendChild(progressBar);
  
  window.addEventListener('load', () => {
    progressBar.style.width = '100%';
    setTimeout(() => {
      progressBar.style.opacity = '0';
      setTimeout(() => progressBar.remove(), 300);
    }, 300);
  });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSmoothScroll();
  initCodeHighlight();
  initLazyLoad();
  initCopyButtons();
  initResponsiveTables();
  initProgressBar();
  
  // 添加复制代码按钮样式
  const style = document.createElement('style');
  style.textContent = `
    .copy-code-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: var(--gray-light);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 5px 10px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;
      color: var(--gray);
    }
    
    pre:hover .copy-code-btn {
      opacity: 1;
    }
    
    .copy-code-btn:hover {
      background: var(--primary);
      color: white;
    }
    
    .theme-transition * {
      transition: background-color 0.3s, color 0.3s, border-color 0.3s !important;
    }
    
    .table-wrapper {
      margin: 1.5rem 0;
      border-radius: var(--radius);
      border: 1px solid var(--border);
    }
  `;
  document.head.appendChild(style);
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K 聚焦搜索
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const search = document.querySelector('input[type="search"]');
    if (search) search.focus();
  }
  
  // ESC 关闭菜单
  if (e.key === 'Escape') {
    const menuToggle = document.querySelector('.navbar-toggle[aria-expanded="true"]');
    if (menuToggle) {
      menuToggle.click();
    }
  }
});