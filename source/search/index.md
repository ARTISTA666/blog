---
title: 站内搜索
date: 2025-08-22 16:30:00
type: "search"
layout: "search"
comments: false
---

<div class="search-container">
    <div class="search-input-wrapper">
        <input type="text" id="search-input" placeholder="输入关键词搜索文章..." />
        <button id="search-button">搜索</button>
        <button id="clear-search">清空</button>
    </div>
    
    <div id="search-results"></div>
</div>

<style>
.search-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.search-input-wrapper {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    align-items: center;
}

#search-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
}

#search-input:focus {
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

#search-button, #clear-search {
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

#search-button {
    background-color: #0066cc;
    color: white;
}

#search-button:hover {
    background-color: #0056b3;
}

#clear-search {
    background-color: #6c757d;
    color: white;
}

#clear-search:hover {
    background-color: #5a6268;
}

#search-results {
    min-height: 200px;
}

.search-results-header {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.search-results-header p {
    color: #666;
    font-size: 14px;
    margin: 0;
}

.search-result-item {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fff;
    transition: box-shadow 0.3s ease;
}

.search-result-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-result-item h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
}

.search-result-item h3 a {
    color: #0066cc;
    text-decoration: none;
}

.search-result-item h3 a:hover {
    text-decoration: underline;
}

.search-meta {
    margin: 10px 0;
    font-size: 14px;
    color: #666;
}

.search-meta .date {
    margin-right: 15px;
}

.search-meta .category {
    font-weight: 500;
}

.search-excerpt {
    margin: 15px 0;
    line-height: 1.6;
    color: #333;
}

.search-tags {
    margin-top: 15px;
}

.search-tags .tag {
    display: inline-block;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 5px;
    background-color: #f8f9fa;
    color: #495057;
    border-radius: 4px;
    font-size: 12px;
    text-decoration: none;
}

.no-results {
    text-align: center;
    color: #666;
    font-size: 16px;
    padding: 40px 0;
}

mark {
    background-color: #fff3cd;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .search-input-wrapper {
        flex-direction: column;
    }
    
    #search-input {
        width: 100%;
        margin-bottom: 10px;
    }
    
    #search-button, #clear-search {
        width: 100%;
    }
    
    .search-result-item {
        padding: 15px;
    }
    
    .search-result-item h3 {
        font-size: 18px;
    }
}
</style>

<script src="/js/search.js"></script>