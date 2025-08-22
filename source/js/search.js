// 简单的客户端搜索功能
class BlogSearch {
    constructor() {
        this.posts = [];
        this.searchIndex = null;
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.createSearchIndex();
        this.bindEvents();
    }

    // 从JSON文件加载文章数据
    async loadPosts() {
        try {
            const response = await fetch('/search.json');
            if (response.ok) {
                this.posts = await response.json();
            } else {
                // 如果获取失败，使用示例数据
                this.loadSampleData();
            }
        } catch (error) {
            console.log('从服务器加载搜索数据失败，使用示例数据');
            this.loadSampleData();
        }
    }

    // 示例数据（用于本地开发）
    loadSampleData() {
        this.posts = [
            {
                title: "如何使用Hexo搭建个人博客",
                content: "本文将详细介绍如何使用Hexo这个强大的静态网站生成器来搭建一个功能完整的个人技术博客。Hexo是一个快速、简洁且高效的博客框架。",
                url: "/2025/08/22/hexo-blog-setup/",
                date: "2025-08-22",
                tags: ["Hexo", "博客", "静态网站", "教程"],
                categories: ["技术分享"]
            },
            {
                title: "JavaScript ES6+ 新特性详解",
                content: "深入讲解JavaScript ES6及以后版本的重要新特性，帮助开发者更好地使用现代JavaScript。包括let/const、箭头函数、模板字符串等。",
                url: "/2025/08/22/javascript-es6-features/",
                date: "2025-08-22",
                tags: ["JavaScript", "ES6", "前端开发", "编程语言"],
                categories: ["前端技术"]
            },
            {
                title: "Node.js 性能优化最佳实践",
                content: "深入探讨Node.js应用的性能优化策略和最佳实践，帮助开发者构建高性能的服务端应用。包括内存管理、异步编程优化等。",
                url: "/2025/08/22/nodejs-performance-optimization/",
                date: "2025-08-22",
                tags: ["Node.js", "性能优化", "后端开发", "JavaScript"],
                categories: ["后端技术"]
            }
        ];
    }

    // 创建搜索索引
    createSearchIndex() {
        this.searchIndex = this.posts.map(post => ({
            ...post,
            searchText: `${post.title} ${post.content} ${post.tags.join(' ')} ${post.categories.join(' ')}`.toLowerCase()
        }));
    }

    // 执行搜索
    search(keyword) {
        if (!keyword.trim()) {
            return [];
        }

        const searchTerm = keyword.toLowerCase();
        const results = this.searchIndex.filter(post => 
            post.searchText.includes(searchTerm)
        );

        // 按相关性排序（简单实现：标题匹配优先）
        return results.sort((a, b) => {
            const aInTitle = a.title.toLowerCase().includes(searchTerm);
            const bInTitle = b.title.toLowerCase().includes(searchTerm);
            
            if (aInTitle && !bInTitle) return -1;
            if (!aInTitle && bInTitle) return 1;
            return 0;
        });
    }

    // 渲染搜索结果
    renderResults(results, keyword) {
        const container = document.getElementById('search-results');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `<p class="no-results">没有找到包含 "${keyword}" 的文章</p>`;
            return;
        }

        const html = results.map(post => `
            <div class="search-result-item">
                <h3><a href="${post.url}">${this.highlightKeyword(post.title, keyword)}</a></h3>
                <p class="search-meta">
                    <span class="date">${post.date}</span>
                    <span class="category">${post.categories.join(', ')}</span>
                </p>
                <p class="search-excerpt">${this.highlightKeyword(this.getExcerpt(post.content, keyword), keyword)}</p>
                <div class="search-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="search-results-header">
                <p>找到 ${results.length} 篇相关文章</p>
            </div>
            ${html}
        `;
    }

    // 高亮关键词
    highlightKeyword(text, keyword) {
        if (!keyword.trim()) return text;
        
        const regex = new RegExp(`(${keyword})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // 获取摘要
    getExcerpt(content, keyword, length = 150) {
        const index = content.toLowerCase().indexOf(keyword.toLowerCase());
        let start = Math.max(0, index - 50);
        let end = Math.min(content.length, start + length);
        
        let excerpt = content.substring(start, end);
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';
        
        return excerpt;
    }

    // 绑定事件
    bindEvents() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const clearButton = document.getElementById('clear-search');

        if (searchInput) {
            // 实时搜索
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });

            // 回车搜索
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(e.target.value);
                }
            });
        }

        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.performSearch(searchInput.value);
            });
        }

        if (clearButton) {
            clearButton.addEventListener('click', () => {
                searchInput.value = '';
                document.getElementById('search-results').innerHTML = '';
                searchInput.focus();
            });
        }
    }

    // 执行搜索并渲染结果
    performSearch(keyword) {
        if (!keyword.trim()) {
            document.getElementById('search-results').innerHTML = '';
            return;
        }

        const results = this.search(keyword);
        this.renderResults(results, keyword);

        // 统计搜索
        this.trackSearch(keyword, results.length);
    }

    // 搜索统计（可选）
    trackSearch(keyword, resultCount) {
        console.log(`搜索: "${keyword}", 结果数: ${resultCount}`);
        // 这里可以添加搜索统计逻辑
    }
}

// 页面加载完成后初始化搜索
document.addEventListener('DOMContentLoaded', () => {
    window.blogSearch = new BlogSearch();
});

// 导出供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogSearch;
}