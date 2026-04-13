\---

layout: post

title: "欢迎来到我的技术博客"

date: 2024-01-15

categories: \[随笔, 建站]

tags: \[Jekyll, GitHub Pages, 博客]

author: 张三

comments: true

\---



\## 你好，世界！ 👋



欢迎来到我的个人技术博客！这是我在 GitHub Pages 上使用 Jekyll 搭建的第一个博客。



作为一名软件工程师，我一直认为分享和记录是成长的重要部分。这个博客将用来：



\- 📝 记录技术学习心得

\- 🔧 分享开发经验

\- 💡 讨论技术方案

\- 🚀 探索新技术趋势



\## 为什么选择 Jekyll + GitHub Pages？



在众多静态网站生成器中，我选择了 Jekyll 主要有以下几个原因：



\### 1. 简单易用

\- 使用 Markdown 写作，专注于内容

\- 无需数据库，所有内容都是文本文件

\- GitHub 原生支持，自动构建和部署



\### 2. 完全免费

\- GitHub Pages 提供免费的托管

\- 支持自定义域名

\- 自动 SSL 证书



\### 3. 高度可定制

\- 使用 Liquid 模板语言

\- 可以完全控制样式和布局

\- 丰富的插件生态



\### 4. 性能优秀

\- 纯静态文件，加载速度快

\- 良好的 SEO 支持

\- 易于 CDN 缓存



\## 博客功能特色



这个博客模板包含以下功能：



\### 🎨 现代设计

\- 响应式布局，支持所有设备

\- 暗色/亮色主题切换

\- 优雅的代码高亮



\### 📱 移动端优化

\- 触摸友好的交互

\- 优化的阅读体验

\- 快速加载速度



\### 🔍 SEO 优化

\- 语义化 HTML

\- 自动生成站点地图

\- Open Graph 和 Twitter Card 支持



\### 💬 互动功能

\- 文章分类和标签

\- 上一篇/下一篇导航

\- 相关文章推荐

\- 评论系统（可配置）



\## 技术栈



这个博客使用了以下技术：



\- \*\*静态网站生成器\*\*: Jekyll

\- \*\*托管平台\*\*: GitHub Pages

\- \*\*前端框架\*\*: 纯 HTML/CSS/JavaScript

\- \*\*样式\*\*: 自定义 CSS，支持 CSS 变量

\- \*\*图标\*\*: Font Awesome

\- \*\*代码高亮\*\*: Prism.js

\- \*\*字体\*\*: Inter + JetBrains Mono



\## 开始写作



创建新文章非常简单：



1\. 在 `\_posts` 目录创建 Markdown 文件

2\. 文件名格式：`YYYY-MM-DD-文章标题.md`

3\. 添加 Front Matter 元数据

4\. 使用 Markdown 编写内容

5\. 提交到 GitHub，自动部署



我来为你生成一套完整的、可直接使用的 Jekyll 个人博客网站，包含所有必要的文件。

完整的 Jekyll 博客模板

第一步：创建仓库结构

你的用户名.github.io/

├── \_config.yml

├── index.html

├── about.md

├── 404.html

├── .gitignore

├── README.md

├── \_includes/

│   ├── header.html

│   ├── footer.html

│   ├── nav.html

│   └── head.html

├── \_layouts/

│   ├── default.html

│   ├── post.html

│   ├── page.html

│   └── home.html

├── \_posts/

│   ├── 2024-01-15-welcome-to-jekyll.md

│   ├── 2024-01-16-github-pages-guide.md

│   └── 2024-01-17-web-development-tips.md

├── assets/

│   ├── css/

│   │   └── style.css

│   ├── js/

│   │   └── main.js

│   └── images/

│       └── logo.png

└── \_sass/

&#x20;   ├── \_variables.scss

&#x20;   ├── \_base.scss

&#x20;   └── \_layout.scss

第二步：创建所有文件

1\. 主配置文件 \_config.yml

\# 站点设置

title: "张三的技术博客"

name: "张三"

email: "zhangsan@example.com"

description: "全栈软件工程师 | 技术分享 | 学习记录"

baseurl: ""  # 子目录路径，如果放在子目录需要设置

url: "https://zhangsan.github.io"  # 替换为你的域名

github\_username: zhangsan  # 替换为你的GitHub用户名



\# 构建设置

markdown: kramdown

highlighter: rouge

permalink: pretty

timezone: Asia/Shanghai



\# 主题设置

theme: minima

plugins:

&#x20; - jekyll-feed

&#x20; - jekyll-seo-tag

&#x20; - jekyll-sitemap



\# 分页设置

paginate: 5

paginate\_path: "/page:num/"



\# 社交链接

social\_links:

&#x20; github: zhangsan

&#x20; twitter: zhangsan

&#x20; linkedin: in/zhangsan

&#x20; stackoverflow: users/123456/zhangsan

&#x20; weibo: zhangsan



\# 作者信息

author:

&#x20; name: "张三"

&#x20; bio: "全栈软件工程师，热衷于开源和技术分享"

&#x20; location: "北京，中国"

&#x20; avatar: "/assets/images/avatar.jpg"



\# 评论系统 (可选的，需要时启用)

comments:

&#x20; enabled: false

&#x20; provider: "disqus"  # 或 "utterances", "giscus"

&#x20; disqus\_shortname: ""



\# 谷歌分析 (需要时启用)

google\_analytics: "UA-XXXXXXXXX-X"



\# 排除文件

exclude:

&#x20; - Gemfile

&#x20; - Gemfile.lock

&#x20; - node\_modules

&#x20; - vendor

&#x20; - README.md



\# 包含文件

include:

&#x20; - \_pages



\# 默认设置

defaults:

&#x20; - scope:

&#x20;     path: ""

&#x20;     type: "posts"

&#x20;   values:

&#x20;     layout: "post"

&#x20;     comments: true

&#x20; - scope:

&#x20;     path: ""

&#x20;     type: "pages"

&#x20;   values:

&#x20;     layout: "page"

&#x20; - scope:

&#x20;     path: ""

&#x20;   values:

&#x20;     layout: "default"

2\. 主页 index.html

\---

layout: home

title: 首页

permalink: /

\---

3\. 关于页面 about.md

\---

layout: page

title: 关于我

permalink: /about/

\---



\# 关于我



\## 👋 你好！



我是张三，一名全栈软件工程师，拥有5年Web开发经验。



\## 🚀 技术栈



\### 前端

\- \*\*框架\*\*: React, Vue.js, TypeScript

\- \*\*样式\*\*: CSS3, Sass, Tailwind CSS

\- \*\*构建工具\*\*: Webpack, Vite, Rollup



\### 后端

\- \*\*语言\*\*: Node.js, Python, Go

\- \*\*框架\*\*: Express, Django, Gin

\- \*\*数据库\*\*: MySQL, PostgreSQL, MongoDB, Redis



\### 运维与工具

\- \*\*云服务\*\*: AWS, AliCloud, Vercel

\- \*\*容器化\*\*: Docker, Kubernetes

\- \*\*CI/CD\*\*: GitHub Actions, Jenkins

\- \*\*监控\*\*: Grafana, Prometheus



\## 📈 工作经历



\### 高级全栈工程师 | ABC科技有限公司

\*2021年6月 - 至今\*



\- 领导开发团队重构核心业务系统，性能提升300%

\- 设计并实现微服务架构，支持日活百万用户

\- 引入自动化测试，代码覆盖率从40%提升至85%



\### 后端开发工程师 | XYZ科技公司

\*2019年3月 - 2021年5月\*



\- 开发高并发API服务，处理峰值QPS 10k+

\- 优化数据库查询，响应时间从2秒降至200ms

\- 设计并实现实时消息推送系统



\## 📚 教育背景



\*\*计算机科学与技术 学士学位\*\*  

北京大学 | 2015年 - 2019年



\## 🏆 证书与奖项



\- AWS Certified Solutions Architect

\- Google Professional Cloud Developer

\- 公司年度优秀员工 (2022)



\## 📫 联系我



\- 📧 邮箱: zhangsan@example.com

\- 💼 LinkedIn: \[linkedin.com/in/zhangsan](https://linkedin.com/in/zhangsan)

\- 🐙 GitHub: \[github.com/zhangsan](https://github.com/zhangsan)

\- 🐦 Twitter: \[twitter.com/zhangsan](https://twitter.com/zhangsan)



\---



\*感谢访问我的个人网站！\*

4\. 404页面 404.html

\---

layout: default

title: 页面未找到

permalink: /404.html

\---



<div class="not-found">

&#x20; <h1>404</h1>

&#x20; <h2>页面未找到</h2>

&#x20; <p>抱歉，您访问的页面不存在。</p>

&#x20; <a href="/" class="btn">返回首页</a>

</div>



<style>

.not-found {

&#x20; text-align: center;

&#x20; padding: 100px 20px;

&#x20; min-height: 60vh;

&#x20; display: flex;

&#x20; flex-direction: column;

&#x20; justify-content: center;

&#x20; align-items: center;

}



.not-found h1 {

&#x20; font-size: 8rem;

&#x20; margin: 0;

&#x20; color: #3b82f6;

&#x20; font-weight: 800;

}



.not-found h2 {

&#x20; font-size: 2rem;

&#x20; margin: 20px 0;

&#x20; color: #1f2937;

}



.not-found p {

&#x20; font-size: 1.2rem;

&#x20; color: #6b7280;

&#x20; margin-bottom: 40px;

&#x20; max-width: 500px;

}



.not-found .btn {

&#x20; display: inline-block;

&#x20; background: #3b82f6;

&#x20; color: white;

&#x20; padding: 12px 30px;

&#x20; border-radius: 5px;

&#x20; text-decoration: none;

&#x20; font-weight: 600;

&#x20; transition: all 0.3s;

}



.not-found .btn:hover {

&#x20; background: #2563eb;

&#x20; transform: translateY(-2px);

}

</style>

5\. 布局文件

\_layouts/default.html

<!DOCTYPE html>

<html lang="zh-CN">

<head>

&#x20; {% include head.html %}

</head>

<body>

&#x20; {% include header.html %}

&#x20; 

&#x20; <main class="container">

&#x20;   {{ content }}

&#x20; </main>

&#x20; 

&#x20; {% include footer.html %}

&#x20; 

&#x20; <script src="{{ '/assets/js/main.js' | relative\_url }}"></script>

</body>

</html>

\_layouts/home.html

\---

layout: default

\---



<div class="home">

&#x20; <!-- 英雄区域 -->

&#x20; <section class="hero">

&#x20;   <div class="hero-content">

&#x20;     <h1 class="hero-title">{{ site.title }}</h1>

&#x20;     <p class="hero-description">{{ site.description }}</p>

&#x20;     <div class="hero-buttons">

&#x20;       <a href="/about" class="btn btn-primary">关于我</a>

&#x20;       <a href="#latest-posts" class="btn btn-outline">查看博客</a>

&#x20;     </div>

&#x20;   </div>

&#x20; </section>



&#x20; <!-- 最新文章 -->

&#x20; <section id="latest-posts" class="latest-posts">

&#x20;   <h2>最新文章</h2>

&#x20;   

&#x20;   {% if site.posts.size > 0 %}

&#x20;     <div class="posts-grid">

&#x20;       {% for post in paginator.posts %}

&#x20;         <article class="post-card">

&#x20;           <div class="post-card-content">

&#x20;             <h3 class="post-title">

&#x20;               <a href="{{ post.url | relative\_url }}">{{ post.title }}</a>

&#x20;             </h3>

&#x20;             

&#x20;             <div class="post-meta">

&#x20;               <time datetime="{{ post.date | date\_to\_xmlschema }}">

&#x20;                 {{ post.date | date: "%Y年%m月%d日" }}

&#x20;               </time>

&#x20;               {% if post.categories %}

&#x20;                 <span class="post-categories">

&#x20;                   {% for category in post.categories %}

&#x20;                     <span class="category">{{ category }}</span>

&#x20;                   {% endfor %}

&#x20;                 </span>

&#x20;               {% endif %}

&#x20;             </div>

&#x20;             

&#x20;             <p class="post-excerpt">

&#x20;               {{ post.excerpt | strip\_html | truncate: 150 }}

&#x20;             </p>

&#x20;             

&#x20;             <div class="post-tags">

&#x20;               {% if post.tags %}

&#x20;                 {% for tag in post.tags %}

&#x20;                   <span class="tag">{{ tag }}</span>

&#x20;                 {% endfor %}

&#x20;               {% endif %}

&#x20;             </div>

&#x20;             

&#x20;             <a href="{{ post.url | relative\_url }}" class="read-more">阅读更多 →</a>

&#x20;           </div>

&#x20;         </article>

&#x20;       {% endfor %}

&#x20;     </div>

&#x20;     

&#x20;     <!-- 分页导航 -->

&#x20;     {% if paginator.total\_pages > 1 %}

&#x20;       <div class="pagination">

&#x20;         {% if paginator.previous\_page %}

&#x20;           <a href="{{ paginator.previous\_page\_path | relative\_url }}" class="pagination-prev">上一页</a>

&#x20;         {% endif %}

&#x20;         

&#x20;         <span class="pagination-current">第 {{ paginator.page }} 页，共 {{ paginator.total\_pages }} 页</span>

&#x20;         

&#x20;         {% if paginator.next\_page %}

&#x20;           <a href="{{ paginator.next\_page\_path | relative\_url }}" class="pagination-next">下一页</a>

&#x20;         {% endif %}

&#x20;       </div>

&#x20;     {% endif %}

&#x20;   {% else %}

&#x20;     <p class="no-posts">暂无文章，敬请期待...</p>

&#x20;   {% endif %}

&#x20; </section>

</div>

\_layouts/page.html

\---

layout: default

\---



<article class="page">

&#x20; <header class="page-header">

&#x20;   <h1 class="page-title">{{ page.title }}</h1>

&#x20;   {% if page.subtitle %}

&#x20;     <p class="page-subtitle">{{ page.subtitle }}</p>

&#x20;   {% endif %}

&#x20; </header>

&#x20; 

&#x20; <div class="page-content">

&#x20;   {{ content }}

&#x20; </div>

</article>

\_layouts/post.html

\---

layout: default

\---



<article class="post">

&#x20; <header class="post-header">

&#x20;   <h1 class="post-title">{{ page.title }}</h1>

&#x20;   

&#x20;   <div class="post-meta">

&#x20;     <div class="post-meta-left">

&#x20;       <time datetime="{{ page.date | date\_to\_xmlschema }}" class="post-date">

&#x20;         {{ page.date | date: "%Y年%m月%d日" }}

&#x20;       </time>

&#x20;       

&#x20;       {% if page.author %}

&#x20;         <span class="post-author">作者: {{ page.author }}</span>

&#x20;       {% endif %}

&#x20;       

&#x20;       {% if page.categories.size > 0 %}

&#x20;         <div class="post-categories">

&#x20;           分类:

&#x20;           {% for category in page.categories %}

&#x20;             <a href="{{ '/categories' | relative\_url }}#{{ category | slugify }}" class="category">{{ category }}</a>

&#x20;           {% endfor %}

&#x20;         </div>

&#x20;       {% endif %}

&#x20;     </div>

&#x20;     

&#x20;     {% if page.tags.size > 0 %}

&#x20;       <div class="post-tags">

&#x20;         标签:

&#x20;         {% for tag in page.tags %}

&#x20;           <a href="{{ '/tags' | relative\_url }}#{{ tag | slugify }}" class="tag">{{ tag }}</a>

&#x20;         {% endfor %}

&#x20;       </div>

&#x20;     {% endif %}

&#x20;   </div>

&#x20; </header>

&#x20; 

&#x20; <div class="post-content">

&#x20;   {{ content }}

&#x20; </div>

&#x20; 

&#x20; <footer class="post-footer">

&#x20;   <!-- 上一篇/下一篇导航 -->

&#x20;   <div class="post-navigation">

&#x20;     {% if page.previous %}

&#x20;       <a href="{{ page.previous.url | relative\_url }}" class="post-nav-prev">

&#x20;         ← {{ page.previous.title | truncate: 30 }}

&#x20;       </a>

&#x20;     {% endif %}

&#x20;     

&#x20;     {% if page.next %}

&#x20;       <a href="{{ page.next.url | relative\_url }}" class="post-nav-next">

&#x20;         {{ page.next.title | truncate: 30 }} →

&#x20;       </a>

&#x20;     {% endif %}

&#x20;   </div>

&#x20;   

&#x20;   <!-- 相关文章 -->

&#x20;   {% if site.related\_posts.size > 0 %}

&#x20;     <div class="related-posts">

&#x20;       <h3>相关文章</h3>

&#x20;       <ul>

&#x20;         {% for post in site.related\_posts limit: 3 %}

&#x20;           <li>

&#x20;             <a href="{{ post.url | relative\_url }}">{{ post.title }}</a>

&#x20;             <span class="related-date">{{ post.date | date: "%Y-%m-%d" }}</span>

&#x20;           </li>

&#x20;         {% endfor %}

&#x20;       </ul>

&#x20;     </div>

&#x20;   {% endif %}

&#x20;   

&#x20;   <!-- 评论区域 -->

&#x20;   {% if page.comments %}

&#x20;     <div id="comments" class="comments">

&#x20;       <h3>评论</h3>

&#x20;       {% include comments.html %}

&#x20;     </div>

&#x20;   {% endif %}

&#x20; </footer>

</article>

6\. 包含组件

\_includes/head.html

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">



{% seo %}

{% feed\_meta %}



<title>

&#x20; {% if page.title %}

&#x20;   {{ page.title }} | {{ site.title }}

&#x20; {% else %}

&#x20;   {{ site.title }}

&#x20; {% endif %}

</title>



<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative\_url }}">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">



<link rel="icon" href="{{ '/assets/images/favicon.ico' | relative\_url }}" type="image/x-icon">

<link rel="apple-touch-icon" href="{{ '/assets/images/apple-touch-icon.png' | relative\_url }}">



<!-- 谷歌字体 -->

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&family=JetBrains+Mono\&display=swap" rel="stylesheet">



<!-- 预加载关键资源 -->

<link rel="preload" href="{{ '/assets/css/style.css' | relative\_url }}" as="style">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

\_includes/header.html

<header class="site-header">

&#x20; <div class="container">

&#x20;   <nav class="navbar">

&#x20;     <div class="navbar-brand">

&#x20;       <a href="{{ '/' | relative\_url }}" class="logo">

&#x20;         <i class="fas fa-code"></i>

&#x20;         <span>{{ site.title }}</span>

&#x20;       </a>

&#x20;     </div>

&#x20;     

&#x20;     <button class="navbar-toggle" aria-label="菜单" aria-expanded="false">

&#x20;       <span class="hamburger"></span>

&#x20;     </button>

&#x20;     

&#x20;     <div class="navbar-menu">

&#x20;       <ul class="nav-links">

&#x20;         <li><a href="{{ '/' | relative\_url }}" {% if page.url == "/" %}class="active"{% endif %}>首页</a></li>

&#x20;         <li><a href="{{ '/about' | relative\_url }}" {% if page.url == "/about/" %}class="active"{% endif %}>关于</a></li>

&#x20;         <li><a href="{{ '/archive' | relative\_url }}" {% if page.url contains "/archive/" %}class="active"{% endif %}>归档</a></li>

&#x20;         <li class="dropdown">

&#x20;           <a href="javascript:void(0)">分类 <i class="fas fa-chevron-down"></i></a>

&#x20;           <ul class="dropdown-menu">

&#x20;             <li><a href="{{ '/categories' | relative\_url }}">所有分类</a></li>

&#x20;             <li><hr></li>

&#x20;             {% for category in site.categories %}

&#x20;               <li><a href="{{ '/categories' | relative\_url }}#{{ category\[0] | slugify }}">{{ category\[0] }}</a></li>

&#x20;             {% endfor %}

&#x20;           </ul>

&#x20;         </li>

&#x20;       </ul>

&#x20;       

&#x20;       <div class="navbar-social">

&#x20;         <a href="https://github.com/{{ site.social\_links.github }}" target="\_blank" aria-label="GitHub">

&#x20;           <i class="fab fa-github"></i>

&#x20;         </a>

&#x20;         <a href="https://twitter.com/{{ site.social\_links.twitter }}" target="\_blank" aria-label="Twitter">

&#x20;           <i class="fab fa-twitter"></i>

&#x20;         </a>

&#x20;         <a href="https://linkedin.com/in/{{ site.social\_links.linkedin }}" target="\_blank" aria-label="LinkedIn">

&#x20;           <i class="fab fa-linkedin"></i>

&#x20;         </a>

&#x20;         <a href="/feed.xml" target="\_blank" aria-label="RSS订阅">

&#x20;           <i class="fas fa-rss"></i>

&#x20;         </a>

&#x20;       </div>

&#x20;       

&#x20;       <div class="theme-toggle">

&#x20;         <button class="theme-toggle-btn" aria-label="切换主题">

&#x20;           <i class="fas fa-moon"></i>

&#x20;           <i class="fas fa-sun"></i>

&#x20;         </button>

&#x20;       </div>

&#x20;     </div>

&#x20;   </nav>

&#x20; </div>

</header>

\_includes/footer.html

<footer class="site-footer">

&#x20; <div class="container">

&#x20;   <div class="footer-content">

&#x20;     <div class="footer-section">

&#x20;       <h3>{{ site.title }}</h3>

&#x20;       <p>{{ site.description }}</p>

&#x20;       <div class="social-links">

&#x20;         {% if site.social\_links.github %}

&#x20;           <a href="https://github.com/{{ site.social\_links.github }}" target="\_blank" aria-label="GitHub">

&#x20;             <i class="fab fa-github"></i>

&#x20;           </a>

&#x20;         {% endif %}

&#x20;         {% if site.social\_links.twitter %}

&#x20;           <a href="https://twitter.com/{{ site.social\_links.twitter }}" target="\_blank" aria-label="Twitter">

&#x20;             <i class="fab fa-twitter"></i>

&#x20;           </a>

&#x20;         {% endif %}

&#x20;         {% if site.social\_links.linkedin %}

&#x20;           <a href="https://linkedin.com/in/{{ site.social\_links.linkedin }}" target="\_blank" aria-label="LinkedIn">

&#x20;             <i class="fab fa-linkedin"></i>

&#x20;           </a>

&#x20;         {% endif %}

&#x20;         {% if site.social\_links.weibo %}

&#x20;           <a href="https://weibo.com/{{ site.social\_links.weibo }}" target="\_blank" aria-label="微博">

&#x20;             <i class="fab fa-weibo"></i>

&#x20;           </a>

&#x20;         {% endif %}

&#x20;         <a href="/feed.xml" target="\_blank" aria-label="RSS订阅">

&#x20;           <i class="fas fa-rss"></i>

&#x20;         </a>

&#x20;       </div>

&#x20;     </div>

&#x20;     

&#x20;     <div class="footer-section">

&#x20;       <h3>快速链接</h3>

&#x20;       <ul>

&#x20;         <li><a href="{{ '/' | relative\_url }}">首页</a></li>

&#x20;         <li><a href="{{ '/about' | relative\_url }}">关于我</a></li>

&#x20;         <li><a href="{{ '/archive' | relative\_url }}">文章归档</a></li>

&#x20;         <li><a href="{{ '/categories' | relative\_url }}">分类</a></li>

&#x20;         <li><a href="{{ '/tags' | relative\_url }}">标签</a></li>

&#x20;       </ul>

&#x20;     </div>

&#x20;     

&#x20;     <div class="footer-section">

&#x20;       <h3>联系方式</h3>

&#x20;       <ul>

&#x20;         <li><i class="fas fa-envelope"></i> {{ site.email }}</li>

&#x20;         <li><i class="fas fa-map-marker-alt"></i> {{ site.author.location }}</li>

&#x20;       </ul>

&#x20;     </div>

&#x20;   </div>

&#x20;   

&#x20;   <div class="footer-bottom">

&#x20;     <p>

&#x20;       \&copy; {{ site.time | date: '%Y' }} {{ site.title }}. 

&#x20;       基于 <a href="https://jekyllrb.com/" target="\_blank">Jekyll</a> 构建，

&#x20;       托管于 <a href="https://pages.github.com/" target="\_blank">GitHub Pages</a>.

&#x20;       <span id="busuanzi\_container\_site\_pv">

&#x20;         总访问量: <span id="busuanzi\_value\_site\_pv">0</span> 次

&#x20;       </span>

&#x20;     </p>

&#x20;   </div>

&#x20; </div>

</footer>

\_includes/nav.html(备用)

<nav class="main-nav">

&#x20; <ul>

&#x20;   {% for item in site.navigation %}

&#x20;     {% if item.url == page.url %}

&#x20;       {% assign active = 'active' %}

&#x20;     {% else %}

&#x20;       {% assign active = '' %}

&#x20;     {% endif %}

&#x20;     

&#x20;     <li>

&#x20;       <a href="{{ item.url | relative\_url }}" class="{{ active }}">

&#x20;         {% if item.icon %}

&#x20;           <i class="{{ item.icon }}"></i>

&#x20;         {% endif %}

&#x20;         {{ item.title }}

&#x20;       </a>

&#x20;     </li>

&#x20;   {% endfor %}

&#x20; </ul>

</nav>

7\. 样式文件

assets/css/style.css

/\* 全局样式 \*/

:root {

&#x20; --primary: #3b82f6;

&#x20; --primary-dark: #2563eb;

&#x20; --secondary: #7c3aed;

&#x20; --success: #10b981;

&#x20; --danger: #ef4444;

&#x20; --warning: #f59e0b;

&#x20; --info: #06b6d4;

&#x20; 

&#x20; --dark: #1e293b;

&#x20; --light: #f8fafc;

&#x20; --gray: #64748b;

&#x20; --gray-light: #e2e8f0;

&#x20; --gray-dark: #334155;

&#x20; 

&#x20; --border: #cbd5e1;

&#x20; --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

&#x20; --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

&#x20; 

&#x20; --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

&#x20; --font-mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;

&#x20; 

&#x20; --radius: 8px;

&#x20; --transition: all 0.3s ease;

}



/\* 暗色主题变量 \*/

\[data-theme="dark"] {

&#x20; --primary: #60a5fa;

&#x20; --primary-dark: #3b82f6;

&#x20; --secondary: #a78bfa;

&#x20; 

&#x20; --dark: #f8fafc;

&#x20; --light: #0f172a;

&#x20; --gray: #94a3b8;

&#x20; --gray-light: #1e293b;

&#x20; --gray-dark: #cbd5e1;

&#x20; 

&#x20; --border: #334155;

&#x20; --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);

&#x20; --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);

}



\* {

&#x20; margin: 0;

&#x20; padding: 0;

&#x20; box-sizing: border-box;

}



html {

&#x20; scroll-behavior: smooth;

&#x20; scroll-padding-top: 80px;

}



body {

&#x20; font-family: var(--font-sans);

&#x20; font-size: 16px;

&#x20; line-height: 1.6;

&#x20; color: var(--dark);

&#x20; background-color: var(--light);

&#x20; transition: var(--transition);

}



.container {

&#x20; width: 100%;

&#x20; max-width: 1200px;

&#x20; margin: 0 auto;

&#x20; padding: 0 20px;

}



/\* 头部导航 \*/

.site-header {

&#x20; position: fixed;

&#x20; top: 0;

&#x20; left: 0;

&#x20; width: 100%;

&#x20; background: var(--light);

&#x20; box-shadow: var(--shadow);

&#x20; z-index: 1000;

&#x20; padding: 1rem 0;

&#x20; transition: var(--transition);

}



.navbar {

&#x20; display: flex;

&#x20; justify-content: space-between;

&#x20; align-items: center;

}



.logo {

&#x20; display: flex;

&#x20; align-items: center;

&#x20; gap: 10px;

&#x20; font-size: 1.5rem;

&#x20; font-weight: 700;

&#x20; color: var(--dark);

&#x20; text-decoration: none;

}



.logo i {

&#x20; color: var(--primary);

}



.navbar-menu {

&#x20; display: flex;

&#x20; align-items: center;

&#x20; gap: 2rem;

}



.nav-links {

&#x20; display: flex;

&#x20; list-style: none;

&#x20; gap: 2rem;

}



.nav-links a {

&#x20; color: var(--gray);

&#x20; text-decoration: none;

&#x20; font-weight: 500;

&#x20; transition: var(--transition);

&#x20; position: relative;

&#x20; padding: 0.5rem 0;

}



.nav-links a:hover,

.nav-links a.active {

&#x20; color: var(--dark);

}



.nav-links a.active:after {

&#x20; content: '';

&#x20; position: absolute;

&#x20; bottom: 0;

&#x20; left: 0;

&#x20; width: 100%;

&#x20; height: 2px;

&#x20; background: var(--primary);

&#x20; border-radius: 1px;

}



/\* 下拉菜单 \*/

.dropdown {

&#x20; position: relative;

}



.dropdown-menu {

&#x20; position: absolute;

&#x20; top: 100%;

&#x20; left: 0;

&#x20; min-width: 200px;

&#x20; background: var(--light);

&#x20; box-shadow: var(--shadow-lg);

&#x20; border-radius: var(--radius);

&#x20; padding: 0.5rem 0;

&#x20; opacity: 0;

&#x20; visibility: hidden;

&#x20; transform: translateY(-10px);

&#x20; transition: var(--transition);

&#x20; z-index: 100;

}



.dropdown:hover .dropdown-menu {

&#x20; opacity: 1;

&#x20; visibility: visible;

&#x20; transform: translateY(0);

}



.dropdown-menu li {

&#x20; list-style: none;

}



.dropdown-menu a {

&#x20; display: block;

&#x20; padding: 0.75rem 1.5rem;

&#x20; color: var(--gray);

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

}



.dropdown-menu a:hover {

&#x20; background: var(--gray-light);

&#x20; color: var(--dark);

}



.dropdown-menu hr {

&#x20; border: none;

&#x20; height: 1px;

&#x20; background: var(--border);

&#x20; margin: 0.5rem 0;

}



/\* 社交图标 \*/

.navbar-social {

&#x20; display: flex;

&#x20; gap: 1rem;

}



.navbar-social a {

&#x20; color: var(--gray);

&#x20; font-size: 1.2rem;

&#x20; transition: var(--transition);

}



.navbar-social a:hover {

&#x20; color: var(--primary);

&#x20; transform: translateY(-2px);

}



/\* 主题切换 \*/

.theme-toggle-btn {

&#x20; background: none;

&#x20; border: none;

&#x20; color: var(--gray);

&#x20; font-size: 1.2rem;

&#x20; cursor: pointer;

&#x20; position: relative;

&#x20; width: 24px;

&#x20; height: 24px;

}



.theme-toggle-btn .fa-sun {

&#x20; display: none;

}



\[data-theme="dark"] .theme-toggle-btn .fa-moon {

&#x20; display: none;

}



\[data-theme="dark"] .theme-toggle-btn .fa-sun {

&#x20; display: block;

}



/\* 移动端菜单 \*/

.navbar-toggle {

&#x20; display: none;

&#x20; background: none;

&#x20; border: none;

&#x20; cursor: pointer;

&#x20; padding: 0.5rem;

}



.hamburger {

&#x20; display: block;

&#x20; width: 24px;

&#x20; height: 2px;

&#x20; background: var(--dark);

&#x20; position: relative;

&#x20; transition: var(--transition);

}



.hamburger:before,

.hamburger:after {

&#x20; content: '';

&#x20; position: absolute;

&#x20; width: 24px;

&#x20; height: 2px;

&#x20; background: var(--dark);

&#x20; transition: var(--transition);

}



.hamburger:before {

&#x20; top: -6px;

}



.hamburger:after {

&#x20; bottom: -6px;

}



/\* 英雄区域 \*/

.hero {

&#x20; padding: 120px 0 60px;

&#x20; text-align: center;

&#x20; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);

&#x20; border-radius: 0 0 20px 20px;

&#x20; margin-bottom: 60px;

}



\[data-theme="dark"] .hero {

&#x20; background: linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 100%);

}



.hero-title {

&#x20; font-size: 3.5rem;

&#x20; font-weight: 800;

&#x20; margin-bottom: 1rem;

&#x20; color: var(--dark);

&#x20; line-height: 1.2;

}



.hero-description {

&#x20; font-size: 1.25rem;

&#x20; color: var(--gray);

&#x20; max-width: 600px;

&#x20; margin: 0 auto 2rem;

}



.hero-buttons {

&#x20; display: flex;

&#x20; gap: 1rem;

&#x20; justify-content: center;

&#x20; flex-wrap: wrap;

}



/\* 按钮样式 \*/

.btn {

&#x20; display: inline-block;

&#x20; padding: 12px 28px;

&#x20; border-radius: var(--radius);

&#x20; font-weight: 600;

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

&#x20; border: 2px solid transparent;

&#x20; cursor: pointer;

&#x20; font-size: 1rem;

}



.btn-primary {

&#x20; background: var(--primary);

&#x20; color: white;

}



.btn-primary:hover {

&#x20; background: var(--primary-dark);

&#x20; transform: translateY(-2px);

&#x20; box-shadow: var(--shadow-lg);

}



.btn-outline {

&#x20; background: transparent;

&#x20; border-color: var(--primary);

&#x20; color: var(--primary);

}



.btn-outline:hover {

&#x20; background: var(--primary);

&#x20; color: white;

&#x20; transform: translateY(-2px);

&#x20; box-shadow: var(--shadow-lg);

}



/\* 文章卡片 \*/

.posts-grid {

&#x20; display: grid;

&#x20; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

&#x20; gap: 2rem;

&#x20; margin-bottom: 3rem;

}



.post-card {

&#x20; background: var(--light);

&#x20; border-radius: var(--radius);

&#x20; overflow: hidden;

&#x20; box-shadow: var(--shadow);

&#x20; transition: var(--transition);

&#x20; border: 1px solid var(--border);

}



.post-card:hover {

&#x20; transform: translateY(-5px);

&#x20; box-shadow: var(--shadow-lg);

}



.post-card-content {

&#x20; padding: 1.5rem;

}



.post-title {

&#x20; font-size: 1.5rem;

&#x20; margin-bottom: 0.75rem;

&#x20; line-height: 1.3;

}



.post-title a {

&#x20; color: var(--dark);

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

}



.post-title a:hover {

&#x20; color: var(--primary);

}



.post-meta {

&#x20; display: flex;

&#x20; align-items: center;

&#x20; gap: 1rem;

&#x20; color: var(--gray);

&#x20; font-size: 0.9rem;

&#x20; margin-bottom: 1rem;

&#x20; flex-wrap: wrap;

}



.post-categories {

&#x20; display: flex;

&#x20; gap: 0.5rem;

&#x20; flex-wrap: wrap;

}



.category, .tag {

&#x20; display: inline-block;

&#x20; padding: 4px 12px;

&#x20; border-radius: 20px;

&#x20; font-size: 0.8rem;

&#x20; font-weight: 500;

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

}



.category {

&#x20; background: var(--gray-light);

&#x20; color: var(--dark);

}



.tag {

&#x20; background: var(--primary);

&#x20; color: white;

&#x20; margin-right: 0.5rem;

&#x20; margin-bottom: 0.5rem;

}



.tag:hover {

&#x20; background: var(--primary-dark);

&#x20; transform: translateY(-1px);

}



.post-excerpt {

&#x20; color: var(--gray);

&#x20; margin-bottom: 1rem;

&#x20; line-height: 1.6;

}



.read-more {

&#x20; color: var(--primary);

&#x20; text-decoration: none;

&#x20; font-weight: 600;

&#x20; display: inline-flex;

&#x20; align-items: center;

&#x20; gap: 0.5rem;

&#x20; transition: var(--transition);

}



.read-more:hover {

&#x20; gap: 0.75rem;

&#x20; color: var(--primary-dark);

}



/\* 分页 \*/

.pagination {

&#x20; display: flex;

&#x20; justify-content: center;

&#x20; align-items: center;

&#x20; gap: 2rem;

&#x20; margin-top: 3rem;

&#x20; padding-top: 2rem;

&#x20; border-top: 1px solid var(--border);

}



.pagination a {

&#x20; padding: 8px 20px;

&#x20; border-radius: var(--radius);

&#x20; background: var(--gray-light);

&#x20; color: var(--dark);

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

}



.pagination a:hover {

&#x20; background: var(--primary);

&#x20; color: white;

}



.pagination-current {

&#x20; color: var(--gray);

}



/\* 文章页面 \*/

.post {

&#x20; max-width: 800px;

&#x20; margin: 0 auto;

&#x20; padding: 40px 0;

}



.post-header {

&#x20; margin-bottom: 3rem;

&#x20; text-align: center;

}



.post-title {

&#x20; font-size: 2.5rem;

&#x20; margin-bottom: 1rem;

&#x20; line-height: 1.2;

}



.post-meta {

&#x20; display: flex;

&#x20; justify-content: space-between;

&#x20; align-items: center;

&#x20; flex-wrap: wrap;

&#x20; gap: 1rem;

&#x20; padding: 1.5rem 0;

&#x20; border-top: 1px solid var(--border);

&#x20; border-bottom: 1px solid var(--border);

&#x20; margin: 1.5rem 0;

}



.post-meta-left {

&#x20; display: flex;

&#x20; align-items: center;

&#x20; gap: 1rem;

&#x20; flex-wrap: wrap;

}



.post-date, .post-author {

&#x20; color: var(--gray);

&#x20; font-size: 0.9rem;

}



.post-content {

&#x20; font-size: 1.125rem;

&#x20; line-height: 1.8;

&#x20; color: var(--dark);

}



.post-content h2 {

&#x20; font-size: 2rem;

&#x20; margin: 2.5rem 0 1rem;

&#x20; padding-bottom: 0.5rem;

&#x20; border-bottom: 2px solid var(--primary);

}



.post-content h3 {

&#x20; font-size: 1.5rem;

&#x20; margin: 2rem 0 0.75rem;

}



.post-content p {

&#x20; margin-bottom: 1.5rem;

}



.post-content ul, .post-content ol {

&#x20; margin-bottom: 1.5rem;

&#x20; padding-left: 2rem;

}



.post-content li {

&#x20; margin-bottom: 0.5rem;

}



.post-content code {

&#x20; background: var(--gray-light);

&#x20; padding: 2px 6px;

&#x20; border-radius: 4px;

&#x20; font-family: var(--font-mono);

&#x20; font-size: 0.9em;

}



.post-content pre {

&#x20; background: var(--gray-light);

&#x20; padding: 1.5rem;

&#x20; border-radius: var(--radius);

&#x20; overflow-x: auto;

&#x20; margin: 1.5rem 0;

&#x20; border: 1px solid var(--border);

}



.post-content pre code {

&#x20; background: none;

&#x20; padding: 0;

&#x20; border-radius: 0;

}



.post-content blockquote {

&#x20; border-left: 4px solid var(--primary);

&#x20; padding-left: 1.5rem;

&#x20; margin: 1.5rem 0;

&#x20; color: var(--gray);

&#x20; font-style: italic;

}



.post-content a {

&#x20; color: var(--primary);

&#x20; text-decoration: none;

&#x20; border-bottom: 1px solid transparent;

&#x20; transition: var(--transition);

}



.post-content a:hover {

&#x20; border-bottom-color: var(--primary);

}



.post-content img {

&#x20; max-width: 100%;

&#x20; height: auto;

&#x20; border-radius: var(--radius);

&#x20; margin: 1.5rem 0;

}



.post-content table {

&#x20; width: 100%;

&#x20; border-collapse: collapse;

&#x20; margin: 1.5rem 0;

}



.post-content th, .post-content td {

&#x20; padding: 0.75rem;

&#x20; border: 1px solid var(--border);

&#x20; text-align: left;

}



.post-content th {

&#x20; background: var(--gray-light);

&#x20; font-weight: 600;

}



/\* 文章导航 \*/

.post-navigation {

&#x20; display: flex;

&#x20; justify-content: space-between;

&#x20; align-items: center;

&#x20; padding: 2rem 0;

&#x20; border-top: 1px solid var(--border);

&#x20; border-bottom: 1px solid var(--border);

&#x20; margin: 2rem 0;

}



.post-nav-prev, .post-nav-next {

&#x20; color: var(--primary);

&#x20; text-decoration: none;

&#x20; max-width: 45%;

&#x20; transition: var(--transition);

}



.post-nav-prev:hover, .post-nav-next:hover {

&#x20; color: var(--primary-dark);

&#x20; transform: translateX(-5px);

}



.post-nav-next:hover {

&#x20; transform: translateX(5px);

}



/\* 相关文章 \*/

.related-posts {

&#x20; margin-top: 3rem;

&#x20; padding-top: 2rem;

&#x20; border-top: 1px solid var(--border);

}



.related-posts h3 {

&#x20; font-size: 1.5rem;

&#x20; margin-bottom: 1.5rem;

}



.related-posts ul {

&#x20; list-style: none;

}



.related-posts li {

&#x20; margin-bottom: 1rem;

&#x20; display: flex;

&#x20; justify-content: space-between;

&#x20; align-items: center;

&#x20; flex-wrap: wrap;

&#x20; gap: 1rem;

}



.related-posts a {

&#x20; color: var(--dark);

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

&#x20; flex: 1;

}



.related-posts a:hover {

&#x20; color: var(--primary);

}



.related-date {

&#x20; color: var(--gray);

&#x20; font-size: 0.9rem;

}



/\* 页脚 \*/

.site-footer {

&#x20; background: var(--gray-light);

&#x20; padding: 4rem 0 2rem;

&#x20; margin-top: 4rem;

}



.footer-content {

&#x20; display: grid;

&#x20; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

&#x20; gap: 3rem;

&#x20; margin-bottom: 3rem;

}



.footer-section h3 {

&#x20; font-size: 1.25rem;

&#x20; margin-bottom: 1.5rem;

&#x20; color: var(--dark);

}



.footer-section ul {

&#x20; list-style: none;

}



.footer-section li {

&#x20; margin-bottom: 0.75rem;

&#x20; display: flex;

&#x20; align-items: center;

&#x20; gap: 0.5rem;

&#x20; color: var(--gray);

}



.footer-section a {

&#x20; color: var(--gray);

&#x20; text-decoration: none;

&#x20; transition: var(--transition);

}



.footer-section a:hover {

&#x20; color: var(--primary);

}



.social-links {

&#x20; display: flex;

&#x20; gap: 1rem;

&#x20; margin-top: 1rem;

}



.social-links a {

&#x20; display: inline-flex;

&#x20; align-items: center;

&#x20; justify-content: center;

&#x20; width: 40px;

&#x20; height: 40px;

&#x20; background: var(--light);

&#x20; border-radius: 50%;

&#x20; color: var(--dark);

&#x20; transition: var(--transition);

}



.social-links a:hover {

&#x20; background: var(--primary);

&#x20; color: white;

&#x20; transform: translateY(-3px);

}



.footer-bottom {

&#x20; text-align: center;

&#x20; padding-top: 2rem;

&#x20; border-top: 1px solid var(--border);

&#x20; color: var(--gray);

&#x20; font-size: 0.9rem;

}



.footer-bottom a {

&#x20; color: var(--primary);

&#x20; text-decoration: none;

}



/\* 响应式设计 \*/

@media (max-width: 768px) {

&#x20; h1 { font-size: 2.5rem; }

&#x20; h2 { font-size: 2rem; }

&#x20; h3 { font-size: 1.5rem; }

&#x20; 

&#x20; .hero-title { font-size: 2.5rem; }

&#x20; .hero-description { font-size: 1.1rem; }

&#x20; 

&#x20; .posts-grid {

&#x20;   grid-template-columns: 1fr;

&#x20; }

&#x20; 

&#x20; .post-title { font-size: 2rem; }

&#x20; 

&#x20; .navbar-menu {

&#x20;   position: fixed;

&#x20;   top: 70px;

&#x20;   left: 0;

&#x20;   width: 100%;

&#x20;   background: var(--light);

&#x20;   flex-direction: column;

&#x20;   padding: 2rem;

&#x20;   box-shadow: var(--shadow);

&#x20;   transform: translateY(-100%);

&#x20;   opacity: 0;

&#x20;   visibility: hidden;

&#x20;   transition: var(--transition);

&#x20; }

&#x20; 

&#x20; .navbar-menu.active {

&#x20;   transform: translateY(0);

&#x20;   opacity: 1;

&#x20;   visibility: visible;

&#x20; }

&#x20; 

&#x20; .nav-links {

&#x20;   flex-direction: column;

&#x20;   width: 100%;

&#x20; }

&#x20; 

&#x20; .dropdown-menu {

&#x20;   position: static;

&#x20;   opacity: 1;

&#x20;   visibility: visible;

&#x20;   transform: none;

&#x20;   box-shadow: none;

&#x20;   padding-left: 1rem;

&#x20; }

&#x20; 

&#x20; .navbar-toggle {

&#x20;   display: block;

&#x20; }

&#x20; 

&#x20; .post-meta {

&#x20;   flex-direction: column;

&#x20;   align-items: flex-start;

&#x20; }

&#x20; 

&#x20; .post-navigation {

&#x20;   flex-direction: column;

&#x20;   gap: 1rem;

&#x20;   align-items: flex-start;

&#x20; }

&#x20; 

&#x20; .post-nav-prev, .post-nav-next {

&#x20;   max-width: 100%;

&#x20; }

}



@media (max-width: 480px) {

&#x20; .hero-title { font-size: 2rem; }

&#x20; .hero-buttons { flex-direction: column; }

&#x20; .container { padding: 0 15px; }

}

assets/js/main.js

// 主题切换

function initTheme() {

&#x20; const themeToggle = document.querySelector('.theme-toggle-btn');

&#x20; const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

&#x20; const currentTheme = localStorage.getItem('theme');

&#x20; 

&#x20; // 设置初始主题

&#x20; if (currentTheme === 'dark' || (!currentTheme \&\& prefersDarkScheme.matches)) {

&#x20;   document.documentElement.setAttribute('data-theme', 'dark');

&#x20; } else {

&#x20;   document.documentElement.setAttribute('data-theme', 'light');

&#x20; }

&#x20; 

&#x20; // 切换主题

&#x20; themeToggle?.addEventListener('click', () => {

&#x20;   const currentTheme = document.documentElement.getAttribute('data-theme');

&#x20;   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

&#x20;   

&#x20;   document.documentElement.setAttribute('data-theme', newTheme);

&#x20;   localStorage.setItem('theme', newTheme);

&#x20;   

&#x20;   // 添加切换动画

&#x20;   document.documentElement.classList.add('theme-transition');

&#x20;   setTimeout(() => {

&#x20;     document.documentElement.classList.remove('theme-transition');

&#x20;   }, 300);

&#x20; });

}



// 移动端菜单切换

function initMobileMenu() {

&#x20; const menuToggle = document.querySelector('.navbar-toggle');

&#x20; const navbarMenu = document.querySelector('.navbar-menu');

&#x20; const hamburger = document.querySelector('.hamburger');

&#x20; 

&#x20; menuToggle?.addEventListener('click', () => {

&#x20;   const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

&#x20;   

&#x20;   menuToggle.setAttribute('aria-expanded', !isExpanded);

&#x20;   navbarMenu?.classList.toggle('active');

&#x20;   

&#x20;   // 汉堡菜单动画

&#x20;   if (hamburger) {

&#x20;     if (!isExpanded) {

&#x20;       hamburger.style.transform = 'rotate(45deg)';

&#x20;       hamburger.style.backgroundColor = 'var(--primary)';

&#x20;       hamburger.before.style.transform = 'rotate(-45deg) translate(-6px, 6px)';

&#x20;       hamburger.after.style.transform = 'rotate(-45deg) translate(-6px, -6px)';

&#x20;     } else {

&#x20;       hamburger.style.transform = 'rotate(0)';

&#x20;       hamburger.style.backgroundColor = '';

&#x20;       hamburger.before.style.transform = '';

&#x20;       hamburger.after.style.transform = '';

&#x20;     }

&#x20;   }

&#x20; });

&#x20; 

&#x20; // 点击外部关闭菜单

&#x20; document.addEventListener('click', (e) => {

&#x20;   if (!navbarMenu?.contains(e.target) \&\& !menuToggle?.contains(e.target)) {

&#x20;     menuToggle?.setAttribute('aria-expanded', 'false');

&#x20;     navbarMenu?.classList.remove('active');

&#x20;   }

&#x20; });

}



// 平滑滚动

function initSmoothScroll() {

&#x20; document.querySelectorAll('a\[href^="#"]').forEach(anchor => {

&#x20;   anchor.addEventListener('click', function (e) {

&#x20;     e.preventDefault();

&#x20;     

&#x20;     const targetId = this.getAttribute('href');

&#x20;     if (targetId === '#') return;

&#x20;     

&#x20;     const targetElement = document.querySelector(targetId);

&#x20;     if (targetElement) {

&#x20;       const headerHeight = document.querySelector('.site-header').offsetHeight;

&#x20;       const targetPosition = targetElement.offsetTop - headerHeight;

&#x20;       

&#x20;       window.scrollTo({

&#x20;         top: targetPosition,

&#x20;         behavior: 'smooth'

&#x20;       });

&#x20;       

&#x20;       // 移动端点击后关闭菜单

&#x20;       if (window.innerWidth <= 768) {

&#x20;         const menuToggle = document.querySelector('.navbar-toggle');

&#x20;         const navbarMenu = document.querySelector('.navbar-menu');

&#x20;         menuToggle?.setAttribute('aria-expanded', 'false');

&#x20;         navbarMenu?.classList.remove('active');

&#x20;       }

&#x20;     }

&#x20;   });

&#x20; });

}



// 代码高亮

function initCodeHighlight() {

&#x20; // 如果有代码块，可以在这里添加代码高亮逻辑

&#x20; // 可以集成 Prism.js 或 Highlight.js

&#x20; const codeBlocks = document.querySelectorAll('pre code');

&#x20; if (codeBlocks.length > 0) {

&#x20;   // 延迟加载代码高亮库

&#x20;   const script = document.createElement('script');

&#x20;   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';

&#x20;   script.onload = () => {

&#x20;     const style = document.createElement('link');

&#x20;     style.rel = 'stylesheet';

&#x20;     style.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';

&#x20;     document.head.appendChild(style);

&#x20;   };

&#x20;   document.head.appendChild(script);

&#x20; }

}



// 图片懒加载

function initLazyLoad() {

&#x20; if ('IntersectionObserver' in window) {

&#x20;   const imageObserver = new IntersectionObserver((entries) => {

&#x20;     entries.forEach(entry => {

&#x20;       if (entry.isIntersecting) {

&#x20;         const img = entry.target;

&#x20;         const src = img.getAttribute('data-src');

&#x20;         if (src) {

&#x20;           img.src = src;

&#x20;           img.removeAttribute('data-src');

&#x20;         }

&#x20;         imageObserver.unobserve(img);

&#x20;       }

&#x20;     });

&#x20;   });

&#x20;   

&#x20;   document.querySelectorAll('img\[data-src]').forEach(img => {

&#x20;     imageObserver.observe(img);

&#x20;   });

&#x20; }

}



// 复制代码按钮

function initCopyButtons() {

&#x20; document.querySelectorAll('pre').forEach(pre => {

&#x20;   const button = document.createElement('button');

&#x20;   button.className = 'copy-code-btn';

&#x20;   button.innerHTML = '<i class="fas fa-copy"></i>';

&#x20;   button.title = '复制代码';

&#x20;   button.ariaLabel = '复制代码';

&#x20;   

&#x20;   button.addEventListener('click', async () => {

&#x20;     const code = pre.querySelector('code')?.textContent || '';

&#x20;     try {

&#x20;       await navigator.clipboard.writeText(code);

&#x20;       button.innerHTML = '<i class="fas fa-check"></i>';

&#x20;       button.style.color = 'var(--success)';

&#x20;       setTimeout(() => {

&#x20;         button.innerHTML = '<i class="fas fa-copy"></i>';

&#x20;         button.style.color = '';

&#x20;       }, 2000);

&#x20;     } catch (err) {

&#x20;       console.error('复制失败:', err);

&#x20;     }

&#x20;   });

&#x20;   

&#x20;   pre.style.position = 'relative';

&#x20;   pre.appendChild(button);

&#x20; });

}



// 表格响应式

function initResponsiveTables() {

&#x20; document.querySelectorAll('.post-content table').forEach(table => {

&#x20;   const wrapper = document.createElement('div');

&#x20;   wrapper.className = 'table-wrapper';

&#x20;   wrapper.style.overflowX = 'auto';

&#x20;   table.parentNode.insertBefore(wrapper, table);

&#x20;   wrapper.appendChild(table);

&#x20; });

}



// 页面加载进度条

function initProgressBar() {

&#x20; const progressBar = document.createElement('div');

&#x20; progressBar.className = 'progress-bar';

&#x20; progressBar.style.position = 'fixed';

&#x20; progressBar.style.top = '0';

&#x20; progressBar.style.left = '0';

&#x20; progressBar.style.width = '0%';

&#x20; progressBar.style.height = '3px';

&#x20; progressBar.style.backgroundColor = 'var(--primary)';

&#x20; progressBar.style.zIndex = '9999';

&#x20; progressBar.style.transition = 'width 0.3s';

&#x20; document.body.appendChild(progressBar);

&#x20; 

&#x20; window.addEventListener('load', () => {

&#x20;   progressBar.style.width = '100%';

&#x20;   setTimeout(() => {

&#x20;     progressBar.style.opacity = '0';

&#x20;     setTimeout(() => progressBar.remove(), 300);

&#x20;   }, 300);

&#x20; });

}



// 初始化所有功能

document.addEventListener('DOMContentLoaded', () => {

&#x20; initTheme();

&#x20; initMobileMenu();

&#x20; initSmoothScroll();

&#x20; initCodeHighlight();

&#x20; initLazyLoad();

&#x20; initCopyButtons();

&#x20; initResponsiveTables();

&#x20; initProgressBar();

&#x20; 

&#x20; // 添加复制代码按钮样式

&#x20; const style = document.createElement('style');

&#x20; style.textContent = `

&#x20;   .copy-code-btn {

&#x20;     position: absolute;

&#x20;     top: 10px;

&#x20;     right: 10px;

&#x20;     background: var(--gray-light);

&#x20;     border: 1px solid var(--border);

&#x20;     border-radius: 4px;

&#x20;     padding: 5px 10px;

&#x20;     cursor: pointer;

&#x20;     opacity: 0;

&#x20;     transition: opacity 0.3s;

&#x20;     color: var(--gray);

&#x20;   }

&#x20;   

&#x20;   pre:hover .copy-code-btn {

&#x20;     opacity: 1;

&#x20;   }

&#x20;   

&#x20;   .copy-code-btn:hover {

&#x20;     background: var(--primary);

&#x20;     color: white;

&#x20;   }

&#x20;   

&#x20;   .theme-transition \* {

&#x20;     transition: background-color 0.3s, color 0.3s, border-color 0.3s !important;

&#x20;   }

&#x20;   

&#x20;   .table-wrapper {

&#x20;     margin: 1.5rem 0;

&#x20;     border-radius: var(--radius);

&#x20;     border: 1px solid var(--border);

&#x20;   }

&#x20; `;

&#x20; document.head.appendChild(style);

});



// 键盘快捷键

document.addEventListener('keydown', (e) => {

&#x20; // Ctrl/Cmd + K 聚焦搜索

&#x20; if ((e.ctrlKey || e.metaKey) \&\& e.key === 'k') {

&#x20;   e.preventDefault();

&#x20;   const search = document.querySelector('input\[type="search"]');

&#x20;   if (search) search.focus();

&#x20; }

&#x20; 

&#x20; // ESC 关闭菜单

&#x20; if (e.key === 'Escape') {

&#x20;   const menuToggle = document.querySelector('.navbar-toggle\[aria-expanded="true"]');

&#x20;   if (menuToggle) {

&#x20;     menuToggle.click();

&#x20;   }

&#x20; }

});

8\. 博客文章示例

\_posts/2024-01-15-welcome-to-jekyll.md

\---

layout: post

title: "欢迎来到我的技术博客"

date: 2024-01-15

categories: \[随笔, 建站]

tags: \[Jekyll, GitHub Pages, 博客]

author: 张三

comments: true

\---



\## 你好，世界！ 👋



欢迎来到我的个人技术博客！这是我在 GitHub Pages 上使用 Jekyll 搭建的第一个博客。



作为一名软件工程师，我一直认为分享和记录是成长的重要部分。这个博客将用来：



\- 📝 记录技术学习心得

\- 🔧 分享开发经验

\- 💡 讨论技术方案

\- 🚀 探索新技术趋势



\## 为什么选择 Jekyll + GitHub Pages？



在众多静态网站生成器中，我选择了 Jekyll 主要有以下几个原因：



\### 1. 简单易用

\- 使用 Markdown 写作，专注于内容

\- 无需数据库，所有内容都是文本文件

\- GitHub 原生支持，自动构建和部署



\### 2. 完全免费

\- GitHub Pages 提供免费的托管

\- 支持自定义域名

\- 自动 SSL 证书



\### 3. 高度可定制

\- 使用 Liquid 模板语言

\- 可以完全控制样式和布局

\- 丰富的插件生态



\### 4. 性能优秀

\- 纯静态文件，加载速度快

\- 良好的 SEO 支持

\- 易于 CDN 缓存



\## 博客功能特色



这个博客模板包含以下功能：



\### 🎨 现代设计

\- 响应式布局，支持所有设备

\- 暗色/亮色主题切换

\- 优雅的代码高亮



\### 📱 移动端优化

\- 触摸友好的交互

\- 优化的阅读体验

\- 快速加载速度



\### 🔍 SEO 优化

\- 语义化 HTML

\- 自动生成站点地图

\- Open Graph 和 Twitter Card 支持



\### 💬 互动功能

\- 文章分类和标签

\- 上一篇/下一篇导航

\- 相关文章推荐

\- 评论系统（可配置）



\## 技术栈



这个博客使用了以下技术：



\- \*\*静态网站生成器\*\*: Jekyll

\- \*\*托管平台\*\*: GitHub Pages

\- \*\*前端框架\*\*: 纯 HTML/CSS/JavaScript

\- \*\*样式\*\*: 自定义 CSS，支持 CSS 变量

\- \*\*图标\*\*: Font Awesome

\- \*\*代码高亮\*\*: Prism.js

\- \*\*字体\*\*: Inter + JetBrains Mono



\## 开始写作



创建新文章非常简单：



1\. 在 `\_posts` 目录创建 Markdown 文件

2\. 文件名格式：`YYYY-MM-DD-文章标题.md`

3\. 添加 Front Matter 元数据

4\. 使用 Markdown 编写内容

5\. 提交到 GitHub，自动部署

markdown

layout: post

title: "文章标题"

date: 2024-01-15

categories: \[分类1, 分类2]

tags: \[标签1, 标签2]

这里是文章内容...



\## 未来计划



我计划为这个博客添加更多功能：



\- \[ ] 全文搜索功能

\- \[ ] 文章阅读进度

\- \[ ] 访客统计

\- \[ ] 文章目录导航

\- \[ ] 多语言支持



\## 写在最后



感谢你访问我的博客！如果你有任何问题或建议，欢迎通过以下方式联系我：



\- 📧 邮箱: zhangsan@example.com

\- 🐙 GitHub: \[github.com/zhangsan](https://github.com/zhangsan)

\- 💼 LinkedIn: \[linkedin.com/in/zhangsan](https://linkedin.com/in/zhangsan)



期待在这里与你分享更多技术内容！ 🚀

