// 生成搜索数据的Hexo脚本
const fs = require('fs');
const path = require('path');

// 注册生成器
hexo.extend.generator.register('search-data', function(locals) {
    const posts = locals.posts.toArray();
    
    const searchData = posts.map(post => {
        // 清理HTML标签
        const content = post.content ? post.content.replace(/<[^>]*>/g, '') : '';
        
        return {
            title: post.title || '',
            content: content.substring(0, 500), // 限制内容长度
            url: post.permalink || '',
            date: post.date ? post.date.format('YYYY-MM-DD') : '',
            tags: post.tags ? post.tags.toArray().map(tag => tag.name) : [],
            categories: post.categories ? post.categories.toArray().map(cat => cat.name) : []
        };
    });
    
    // 生成搜索数据文件
    return {
        path: 'search.json',
        data: JSON.stringify(searchData, null, 2)
    };
});

console.log('搜索数据生成器已注册');